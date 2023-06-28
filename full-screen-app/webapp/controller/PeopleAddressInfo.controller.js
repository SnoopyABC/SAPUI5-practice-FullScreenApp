sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("fullscreenapp.controller.PeopleAddressInfo", {
            onInit: function () {
                this.getRouter().getRoute("RoutePeopleAdressInfo").attachMatched(this._onAttachMatched, this);
            },
            _onAttachMatched: function(oEvent){
                var peopleId = oEvent.getParameter('arguments').peopleId;
                var oView = this.getView();

                this.getView().bindElement({
                    path: "/People('" +  peopleId + "')"
                })
            }
        });
    });
