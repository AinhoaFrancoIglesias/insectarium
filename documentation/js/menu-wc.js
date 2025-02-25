'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">insectarium documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-43d498416734caa047ad2f9d66fcca2e11961c75c95503aa8090e1c199cf7d1484d723d342948319d74dad85d89931e8296573a3d2d4bbd1710adc38fd776294"' : 'data-bs-target="#xs-components-links-module-AppModule-43d498416734caa047ad2f9d66fcca2e11961c75c95503aa8090e1c199cf7d1484d723d342948319d74dad85d89931e8296573a3d2d4bbd1710adc38fd776294"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-43d498416734caa047ad2f9d66fcca2e11961c75c95503aa8090e1c199cf7d1484d723d342948319d74dad85d89931e8296573a3d2d4bbd1710adc38fd776294"' :
                                            'id="xs-components-links-module-AppModule-43d498416734caa047ad2f9d66fcca2e11961c75c95503aa8090e1c199cf7d1484d723d342948319d74dad85d89931e8296573a3d2d4bbd1710adc38fd776294"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' : 'data-bs-target="#xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' :
                                            'id="xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-13f0f283c51e0fa137cce7d9464eaafde574ca453a48905b389cd2827ff5f5538446439f46c46223236762372ae0d3f41be91bf4dbac8e685e7eb59ac8ddd298"' : 'data-bs-target="#xs-components-links-module-AuthModule-13f0f283c51e0fa137cce7d9464eaafde574ca453a48905b389cd2827ff5f5538446439f46c46223236762372ae0d3f41be91bf4dbac8e685e7eb59ac8ddd298"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-13f0f283c51e0fa137cce7d9464eaafde574ca453a48905b389cd2827ff5f5538446439f46c46223236762372ae0d3f41be91bf4dbac8e685e7eb59ac8ddd298"' :
                                            'id="xs-components-links-module-AuthModule-13f0f283c51e0fa137cce7d9464eaafde574ca453a48905b389cd2827ff5f5538446439f46c46223236762372ae0d3f41be91bf4dbac8e685e7eb59ac8ddd298"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContactModule-573882270e1a9d3840960d00324d1edf1877dc17e0f6862b241e318af422586534f50ac277360ea7d1ed09e0e142b104b7a5bed2f1c9685aa8ca7896e435d80b"' : 'data-bs-target="#xs-components-links-module-ContactModule-573882270e1a9d3840960d00324d1edf1877dc17e0f6862b241e318af422586534f50ac277360ea7d1ed09e0e142b104b7a5bed2f1c9685aa8ca7896e435d80b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-573882270e1a9d3840960d00324d1edf1877dc17e0f6862b241e318af422586534f50ac277360ea7d1ed09e0e142b104b7a5bed2f1c9685aa8ca7896e435d80b"' :
                                            'id="xs-components-links-module-ContactModule-573882270e1a9d3840960d00324d1edf1877dc17e0f6862b241e318af422586534f50ac277360ea7d1ed09e0e142b104b7a5bed2f1c9685aa8ca7896e435d80b"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuidesModule.html" data-type="entity-link" >GuidesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GuidesModule-fff564381f7b68bd9bd70aa5e1c1b5d0c1cba35ed61ab9337b9c23cc93e9ec66ea44f413d98d403acbee5d2abc2c7b62ddce3ea1faaad346a408fdba2fb28d16"' : 'data-bs-target="#xs-components-links-module-GuidesModule-fff564381f7b68bd9bd70aa5e1c1b5d0c1cba35ed61ab9337b9c23cc93e9ec66ea44f413d98d403acbee5d2abc2c7b62ddce3ea1faaad346a408fdba2fb28d16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GuidesModule-fff564381f7b68bd9bd70aa5e1c1b5d0c1cba35ed61ab9337b9c23cc93e9ec66ea44f413d98d403acbee5d2abc2c7b62ddce3ea1faaad346a408fdba2fb28d16"' :
                                            'id="xs-components-links-module-GuidesModule-fff564381f7b68bd9bd70aa5e1c1b5d0c1cba35ed61ab9337b9c23cc93e9ec66ea44f413d98d403acbee5d2abc2c7b62ddce3ea1faaad346a408fdba2fb28d16"' }>
                                            <li class="link">
                                                <a href="components/AllguidesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllguidesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesarachnidaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesarachnidaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesblattodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesblattodeaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuideschilopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuideschilopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidescoleopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidescoleopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidescrustaceaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidescrustaceaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesdiplopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesdiplopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesgastropodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesgastropodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuideshymenopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuideshymenopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesisopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesisopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuideslepidopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuideslepidopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesmantodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesmantodeaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuidesphasmatodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuidesphasmatodeaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuidesRoutingModule.html" data-type="entity-link" >GuidesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-3f22f04ea2fec53f9b01c56e0ef6b56d1268aa025d5176088350555db1d5ba5905a7f6d36a3e03089c3d63c3a938e4d1ffd5e2f26a5cf61ecdd8aa62fe5b3e0b"' : 'data-bs-target="#xs-components-links-module-HomeModule-3f22f04ea2fec53f9b01c56e0ef6b56d1268aa025d5176088350555db1d5ba5905a7f6d36a3e03089c3d63c3a938e4d1ffd5e2f26a5cf61ecdd8aa62fe5b3e0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-3f22f04ea2fec53f9b01c56e0ef6b56d1268aa025d5176088350555db1d5ba5905a7f6d36a3e03089c3d63c3a938e4d1ffd5e2f26a5cf61ecdd8aa62fe5b3e0b"' :
                                            'id="xs-components-links-module-HomeModule-3f22f04ea2fec53f9b01c56e0ef6b56d1268aa025d5176088350555db1d5ba5905a7f6d36a3e03089c3d63c3a938e4d1ffd5e2f26a5cf61ecdd8aa62fe5b3e0b"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-5ce46005d3852dd0a8be72f5ac4d27f03f83655c20a2115f3230ea41cf95315c9f5a749a6864c3baf232775b4e0397ccabd07f2eb11bcedac3201636d8c2f54b"' : 'data-bs-target="#xs-components-links-module-PagesModule-5ce46005d3852dd0a8be72f5ac4d27f03f83655c20a2115f3230ea41cf95315c9f5a749a6864c3baf232775b4e0397ccabd07f2eb11bcedac3201636d8c2f54b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-5ce46005d3852dd0a8be72f5ac4d27f03f83655c20a2115f3230ea41cf95315c9f5a749a6864c3baf232775b4e0397ccabd07f2eb11bcedac3201636d8c2f54b"' :
                                            'id="xs-components-links-module-PagesModule-5ce46005d3852dd0a8be72f5ac4d27f03f83655c20a2115f3230ea41cf95315c9f5a749a6864c3baf232775b4e0397ccabd07f2eb11bcedac3201636d8c2f54b"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PurchaseModule.html" data-type="entity-link" >PurchaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PurchaseRoutingModule.html" data-type="entity-link" >PurchaseRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link" >ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShopModule-27c496fde10075408e4a0ac5dea84f3cde551c983759cb04906b971d3332ec0d24988180e40b96426500e8ec9f47cc64ac1fe50e1faa22e06dd8d58a024d924e"' : 'data-bs-target="#xs-components-links-module-ShopModule-27c496fde10075408e4a0ac5dea84f3cde551c983759cb04906b971d3332ec0d24988180e40b96426500e8ec9f47cc64ac1fe50e1faa22e06dd8d58a024d924e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-27c496fde10075408e4a0ac5dea84f3cde551c983759cb04906b971d3332ec0d24988180e40b96426500e8ec9f47cc64ac1fe50e1faa22e06dd8d58a024d924e"' :
                                            'id="xs-components-links-module-ShopModule-27c496fde10075408e4a0ac5dea84f3cde551c983759cb04906b971d3332ec0d24988180e40b96426500e8ec9f47cc64ac1fe50e1faa22e06dd8d58a024d924e"' }>
                                            <li class="link">
                                                <a href="components/AllshopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllshopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoparachnidaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoparachnidaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopblattodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopblattodeaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopchilopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopchilopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopcoleopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopcoleopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopcrustaceaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopcrustaceaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopdiplopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopdiplopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopgastropodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopgastropodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShophymenopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShophymenopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopisopodaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopisopodaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoplepidopteraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoplepidopteraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopmantodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopmantodeaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopphasmatodeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopphasmatodeaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopRoutingModule.html" data-type="entity-link" >ShopRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});