$(function () {
  var tabs = $(".acl-tabs"),
    tabList = tabs.find(".acl-tabs__item"),
    tabLinks = tabList.find(".acl-tabs__link"),
    tabPanel = tabs.find(".acl-tabs__content");

  // Click event handler for tab links
  tabLinks.on("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    var $this = $(this),
        $parentLi = $this.parent(), // Parent li element
        $targetIndex = $parentLi.index(); // Get the index of the parent li

    // Add active class to the clicked tab and remove from siblings
    $parentLi
      .addClass("acl-is-active")
      .siblings()
      .removeClass("acl-is-active");

    // Set aria-selected and tabindex for accessibility
    $this
      .attr({ "aria-selected": true, tabindex: 0 })
      .focus() // Set focus on the clicked tab
      .parent()
      .siblings()
      .find(".acl-tabs__link")
      .attr({ "aria-selected": false, tabindex: -1 });

    // Show the corresponding tab panel and hide others
    tabPanel
      .eq($targetIndex)
      .addClass("acl-show")
      .removeClass("acl-hide")
      .siblings()
      .removeClass("acl-show")
      .addClass("acl-hide");
  });

  // Keyboard navigation handler
  tabLinks.on("keydown", function (e) {
    var $this = $(this),
        $parentLi = $this.parent(), // Parent li element
        keycode = e.keyCode || e.which;

    if (keycode === 39 || keycode === 40) {
      // Right arrow or Down arrow key
      var nextTab = $parentLi.next().find(".acl-tabs__link");

      if (nextTab.length > 0) {
        nextTab.click().focus();
      } else {
        tabLinks.first().click().focus(); // Loop to the first tab
      }
    } else if (keycode === 37 || keycode === 38) {
      // Left arrow or Up arrow key
      var prevTab = $parentLi.prev().find(".acl-tabs__link");

      if (prevTab.length > 0) {
        prevTab.click().focus();
      } else {
        tabLinks.last().click().focus(); // Loop to the last tab
      }
    }
  });

  // Initialize the first tab as active
  tabLinks.eq(0).click(); 

  // Accessibility Setup function
  function acc() {
    tabLinks.attr({ tabindex: -1, "aria-selected": false }).first().attr({ tabindex: 0, "aria-selected": true });
    tabPanel.attr("tabindex", 0);
  }
  acc();
});
