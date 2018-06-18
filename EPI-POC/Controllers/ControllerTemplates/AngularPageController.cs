using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPI_POC.Models.Pages.PageTemplates;
using EPI_POC.Models.Pages;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;

namespace EPI_POC.Controllers.ControllerTemplates
{
    public abstract class AngularPageController<T> : PageController<T> where T : AngularPage
    {
    protected override void OnActionExecuting(ActionExecutingContext filterContext)
    {
      
      object currentPageObject;
      if (filterContext.ActionParameters.TryGetValue("currentPage", out currentPageObject))
      {
        var currentPage = currentPageObject as AngularPage;
        var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        var startPage = contentLoader.Get<StartPage>(ContentReference.StartPage);
        var url = UrlResolver.Current.GetUrl(new UrlBuilder(currentPage.LinkURL), EPiServer.Web.ContextMode.Default);
        var baseHref = UrlResolver.Current.GetUrl(new UrlBuilder(startPage.LinkURL), EPiServer.Web.ContextMode.Default);
        ViewBag.url = url;
        ViewBag.workid = currentPage.ContentLink.WorkID;
        ViewBag.baseHref = baseHref;
      }
      base.OnActionExecuting(filterContext);
    }
  }
}
