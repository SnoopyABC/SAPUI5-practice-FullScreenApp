sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("fullscreenapp.controller.People", {
            onInit: function () {

            },

            onPress: function(oEvent){
                var sPeopleId = oEvent.getSource().getBindingContext().getProperty("UserName");
                this.getRouter().navTo("RoutePeopleAdressInfo", {
                    "peopleId": sPeopleId
                }, true);
            }
        });
    });
