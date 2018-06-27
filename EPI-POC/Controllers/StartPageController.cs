using System.Web.Mvc;
using EPI_POC.Models.Pages;
using EPI_POC.Models.ViewModels;
using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using EPiServer.Web;
using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;

namespace EPI_POC.Controllers
{
    public class StartPageController : PageControllerBase<StartPage>
    {
        public ActionResult Index(StartPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);

            if (SiteDefinition.Current.StartPage.CompareToIgnoreWorkID(currentPage.ContentLink)) // Check if it is the StartPage or just a page of the StartPage type.
            {
                //Connect the view models logotype property to the start page's to make it editable
                var editHints = ViewData.GetEditHints<PageViewModel<StartPage>, StartPage>();
                editHints.AddConnection(m => m.Layout.Logotype, p => p.SiteLogotype);
                editHints.AddConnection(m => m.Layout.ProductPages, p => p.ProductPageLinks);
                editHints.AddConnection(m => m.Layout.CompanyInformationPages, p => p.CompanyInformationPageLinks);
                editHints.AddConnection(m => m.Layout.NewsPages, p => p.NewsPageLinks);
                editHints.AddConnection(m => m.Layout.CustomerZonePages, p => p.CustomerZonePageLinks);
            }

            var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
            var startPage = contentLoader.Get<StartPage>(ContentReference.StartPage);
            var url = UrlResolver.Current.GetUrl(new UrlBuilder(currentPage.LinkURL), EPiServer.Web.ContextMode.Default);
            var baseHref = UrlResolver.Current.GetUrl(new UrlBuilder(startPage.LinkURL), EPiServer.Web.ContextMode.Default);
            ViewBag.url = url;
            ViewBag.workid = currentPage.ContentLink.WorkID;
            ViewBag.baseHref = baseHref;

      return View(model);
        }

    }
}
