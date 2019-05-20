    /**
    * warning toggle
    **/
    function warningToggle() {
        $('.warningPanelCenter').toggleClass('hide');
        let parenta = document.getElementsByClassName('deleteButton')[0].parentNode;
        let parentb = parenta.parentNode;
        let refid = parentb.children[5].firstChild;
        console.log(refid)
    }
     /**
      * edit toggle
     **/
     function editToggle() {
        $(".editEvent").slideToggle();
        let parenta = document.getElementsByClassName('deleteButton')[0].parentNode;
        let parentb = parenta.parentNode;
        let refid = parentb.children[5].firstChild;
     }