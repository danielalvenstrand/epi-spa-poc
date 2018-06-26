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
using EPI_POC.Models.Blocks;

namespace EPI_POC.Controllers.ControllerTemplates
{
    public abstract class AngularBlockController<T> : BlockController<T> where T : AngularBlock
    {
    protected override void OnActionExecuting(ActionExecutingContext filterContext)
    {
      
      object currentBlockObject;
      if (filterContext.ActionParameters.TryGetValue("currentBlock", out currentBlockObject))
      {
        var currentBlock = currentBlockObject as AngularBlock;
        ViewBag.blockType = (currentBlock as IContent).GetOriginalType().Name;
        ViewBag.blockId = (currentBlock as IContent).ContentLink.ID;
        ViewBag.blockWorkId = (currentBlock as IContent).ContentLink.WorkID;
      }
      base.OnActionExecuting(filterContext);
    }
  }
}
