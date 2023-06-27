sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("fullscreenapp.controller.BaseCotnroller", {

        onInit: function(){

        },

        getModel: function(sName){
            return this.getView().getModel(sName);
        },

        getRouter: function(){
            return this.getOwnerComponent().getRouter();
        }

    });
});