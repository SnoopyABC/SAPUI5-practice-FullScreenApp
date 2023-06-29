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

                oView.bindElement({
                    path: "/People('" +  peopleId + "')",
                    events : {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function (oEvent) {
                            oView.setBusy(true);
                        },
                        dataReceived: function (oEvent) {
                            oView.setBusy(false);
                        }
                    }
                })
            },
            _onBindingChange : function (oEvent) {
                // No data for the binding
                if (!this.getView().getBindingContext()) {
                    this.getRouter().getTargets().display("notFound");
                }
            }
        });
    });
