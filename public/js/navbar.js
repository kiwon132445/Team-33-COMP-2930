body, html {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: Roboto;
}
ul {
    list-style: none;
}
.navbar {
    left: 0;
    top: 0;
    height: 75pt;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-bottom: 0;
}

.leftnav {
    float: left;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline-start: 0;
}
.leftnav img {
    cursor: pointer;
    object-fit: contain;
    height: 50pt;
}
.rightnav {
    float: right;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.leftnav li, .rightnav li {
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: -50px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.leftnav li h3:hover, 
.rightnav li h3:hover,
.logoutbutton:hover {
    background-color: #040730;
    color: white;
    border-radius: 10px;
}

.leftnav img:hover {
    background-color: #040730;
    content: url(../images/clientryLogo.png);
    border-radius: 10px;
}

.logoutbutton{
    background: white;
    border: none;
    font-size: 14pt;
    cursor: pointer;
}

#username:before {
    content: 'Logged in as '
}

hr{
    border: 0;
    clear:both;
    display:block;
    width: 96%;               
    background-color:black;
    height: 1px;
}
/*Mobile Media Query*/
@media screen and (max-width: 720px) {
    .desktopNav{
        display: none;
    }
    .mobileNav{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 75pt;
    }
    .menuButton{
        float: right;
        padding-right: 1em;
        cursor: pointer;
    }
    .clientryLogo {
        float: left;
        padding-left: 1em;
        height: 50pt;
    }
    .menuMobile{
        background-color: #b8b8b8;
        color: white;
        text-align: center;
        position: absolute;
        height: 160pt;
        width:100%;
        top: -160pt;
    }
    .menu {
        display: block;
        padding-left: 0;
    }
    .logoutbutton{
        background: #b8b8b8;
        border: none;
        font-size: 14pt;
        cursor: pointer;
    }
}

/* Desktop Media Query */
@media screen and (min-width: 720px) {
    .desktopNav{
        display: block;
    }
    .mobileNav{
        display: none;
    }
    .menuMobile{
        display: none;
    }
}