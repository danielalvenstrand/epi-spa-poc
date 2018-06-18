using System;
using System.ComponentModel.DataAnnotations;
using EPI_POC.Models.Pages.PageTemplates;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;

namespace EPI_POC.Models.Pages
{
    [ContentType(DisplayName = "TestPage", GUID = "582766a6-8c0a-41ec-af42-00c3b13fbe96", Description = "")]
    public class TestPage : AngularPage
    {

        [CultureSpecific]
        [Display(
                    Name = "Heading",
                    Description = "Heading main",
                    GroupName = SystemTabNames.Content,
                    Order = 0)]
        public virtual XhtmlString Heading { get; set; }

        [CultureSpecific]
                [Display(
                    Name = "Main body",
                    Description = "The main body will be shown in the main content area of the page, using the XHTML-editor you can insert for example text, images and tables.",
                    GroupName = SystemTabNames.Content,
                    Order = 1)]
                public virtual XhtmlString MainBody { get; set; }

        [Display(
                Name = "Block area",
                Description = "",
                GroupName = SystemTabNames.Content,
                Order = 70)]
        public virtual ContentArea BlockArea { get; set; }

  }
}
