using System.Web;
using System.Web.Mvc;
using EPiServer.Core;
using EPI_POC.Helpers;
using EPI_POC.Models.Blocks;
using EPI_POC.Models.Pages;
using EPI_POC.Models.ViewModels;
using EPiServer.Web;
using EPiServer.Web.Mvc;
using EPiServer;
using EPI_POC.Controllers.ControllerTemplates;

namespace EPI_POC.Controllers
{
    public class TestBlockController : AngularBlockController<TestBlock>
    {

        public override ActionResult Index(TestBlock currentBlock)
        {
            return PartialView(currentBlock);
        }

    }
}
