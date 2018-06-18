using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace EPI_POC.Models.Blocks
{
  [ContentType(DisplayName = "TestBlock", GUID = "ea5c4f98-9d99-4f5b-9ade-f167ca4fa169", Description = "")]
  public class TestBlock : BlockData
  {
    
            [CultureSpecific]
            [Display(
                Name = "Name",
                Description = "Name field's description",
                GroupName = SystemTabNames.Content,
                Order = 1)]
            public virtual string Name { get; set; }
     
  }
}
