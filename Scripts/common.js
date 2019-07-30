var isPageDirty = false;

jQuery(document).ready(function () {
    //BindShortCut(); //I am getting error in the front end, that'sway I commented Nagarjuna on 02/15/2012
    DisableBackspace();
    FontSizePercent();
    $("input").change(function () {
        isPageDirty = true;
    });
    $("select").change(function () {
        isPageDirty = true;
    });

    if (typeof (IsAuthenticated) != "undefined" && IsAuthenticated) {
        ShowRegisterSessionafterMinute();
    }
    var pathName = window.location.pathname.toLowerCase();
    if (pathName.indexOf("providerportal"))
        pathName = pathName.replace("/providerportal", "");
    switch (pathName) {
        case "/ncidlogin.aspx":
            $("#" + txtUsername).val("");
            $("#" + txtPassword).val("");
            break;
        case "/attestation/fqhc/list.aspx":
            jQuery("#" + rdoFQHC + " input").click(ShowHideStartDatePanel)
            if (!IsSubmitted)
                showDatepicker();
            setFQHCDatepickerWidth();
            leftMenuSlide();
            searchSlide();
            CheckNumeric();
            DisablePaste();
            break;
        case "/attestation/hospital/list.aspx":
            leftMenuSlide();
            //$("#" + btnNext).click(function() { return false; });
            // $("#" + btnNext).click(Hospitalvalidation);
            break;
        case "/attestation/ehehr/list.aspx":
            leftMenuSlide();
            searchSlide();
            break;
        case "/attestation/statushome.aspx":
            leftMenuSlide();
            searchSlide();
            //DisplaySessionTimeout();
            break;
        case "/attestation/epehr/list.aspx":
        case "/attestation/epehr/list.aspx":
            var constraint = 6;
            leftMenuSlide();
            searchSlide();
            TotalPatientVolume();
            CheckNumeric();
            Changevalue(null, 0, null);
            ChangeNPIvalue(null, 0);
            break;
        case "/attestation/hospital/listpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/hospital/addeditpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/fqhc/submitattestation.aspx":
            leftMenuSlide();
            if ($("#" + chkAttest + ":checked").length == 1) {//Checked
                $("#" + btnNext).attr('disabled', '').removeClass("buttonDisabled").addClass("button");
            }
            //$("#" + SaveAndReturnLater).click(function() { return false; });
            //checkddd();
            break;
        case "/attestation/ehehr/addeditpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/ehehr/listpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/epehr/addeditpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/epehr/listpatientencounter.aspx":
            leftMenuSlide();
            break;
        case "/attestation/fqhc/addeditsite.aspx":
            leftMenuSlide();
            break;
        case "/attestation/hospital/addeditsite.aspx":
            leftMenuSlide();
            break;
        case "/attestation/epehr/addeditsite.aspx":
            leftMenuSlide();
            break;
        case "/attestation/aiu.aspx":
            leftMenuSlide();
            $('#dvAjaxbar')
            .dialog({
                modal: true,
                autoOpen: false,
                dialogClass: 'loading_aiu',
                closeOnEscape: false,
                draggable: false,
                resizable: false,
                width: 300,
                minHeight: 40
            });
            break;
        case "/attestation/print.aspx":
            leftMenuSlide();
            break;
        case "/attestation/fqhc/attestationparticipation.aspx":
            leftMenuSlide();
            break;
        case "/attestation/grouppractice/grouppractice.aspx":
            Page_ClientValidate("StartDate");
            showhideGroupDetails();
            CheckProceedGroup();
            jQuery("#" + rdoPatientVolume + " input").change({ a: 'rdoPatientVolume' }, CheckProceedGroup)
            jQuery("#" + rdoAffiliation + " input").change({ a: 'rdoAffiliation' }, CheckProceedGroup)
            jQuery("#" + rdoStateData + " input").change({ a: 'rdoStateData' }, CheckProceedGroup)
            if (typeof (txtStartDate) != "undefined" && !IsSubmitted)
                showDatepicker();
            leftMenuSlide();
            searchSlide();
            DisablePaste();
            break;
        case "/attestation/license.aspx":
            leftMenuSlide();
            if (!IsSubmitted)
                showLicenseDatepicker();
            break;
        case "/attestation/eh/contacts.aspx":
            leftMenuSlide();
            $("#" + txtEHCP_PH).mask("(999) 999-9999", { placeholder: " " });
            break;
        case "/attestation/eh/patientvolume.aspx":
            leftMenuSlide();
            if ($("#" + txtStartDate).val())
                SetEndDate($("#" + txtStartDate).val());
            calcHospitalTotals();
            if (typeof (txtStartDate) != "undefined" && !IsSubmitted)
                showDatepickerPatientVolume();
            break;
        case "/attestation/eh/costreportdetails.aspx":
            leftMenuSlide();
            if (!IsSubmitted) {
                $("#" + txtCRDTX_RPFD)
                    .datepicker({
                        showOn: "button",
                        defaultDate: "10/1/2009",
                        dateFormat: "mm/dd/yy",
                        minDate: "01/01/1900",
                        maxDate: "09/30/2010",
                        buttonImage: datepickerImage,
                        buttonImageOnly: true,
                        buttonText: "Click here to show calendar",
                        onSelect: function (dateText, inst) {
                            var newDate = new Date(dateText);
                            newDate.setFullYear(newDate.getFullYear() + 1);
                            newDate.setDate(newDate.getDate() - 1);
                            var endDateValue =
                                (newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1).toString() : (newDate.getMonth() + 1).toString()) + "/" +
                                (newDate.getDate() < 10 ? "0" + newDate.getDate().toString() : newDate.getDate().toString()) + "/" +
                                newDate.getFullYear().toString();
                            $("#" + txtCRDTX_RPTD).datepicker("option", "defaultDate", endDateValue);
                            ClearCostReportDetails();
                        }
                    });
                $("#" + txtCRDTX_RPTD)
                    .datepicker({
                        showOn: "button",
                        defaultDate: "10/1/2009",
                        dateFormat: "mm/dd/yy",
                        minDate: "01/01/1900",
                        maxDate: "09/30/2010",
                        buttonImage: datepickerImage,
                        buttonImageOnly: true,
                        buttonText: "Click here to show calendar",
                        onSelect: function (dateText, inst) {
                            ClearCostReportDetails();
                        }
                    });
            }
            Page_ClientValidate("CompareCRDValues")
            //            calculateCostDetailTotals('tblTitleXIXDays');
            //            calculateCostDetailTotals('tblTotalInpatientDays');
            break;
        case "/attestation/eh/costreporthistory.aspx":
            leftMenuSlide();
            if (!IsSubmitted) {
                showDatepickerCostHistory();
            }
            break;
    }
    //showTooltip();
    //alert(IsSubmitted);
    if (typeof (IsSubmitted) != "undefined") {
        if (IsSubmitted) {
            disableIt();
        }
    }
    jQuery("input").attr("autocomplete", "off");
});

function showDatepickerCostHistory() {

    var textboxes = $("#" + grdCostHistory).find(".dateField");

    textboxes.each(function (index) {
        $("#" + this.id)
                .datepicker({
                    showOn: "button",
                    dateFormat: "mm/dd/yy",
                    minDate: "01/01/1900",
                    maxDate: "+0d",
                    buttonImage: datepickerImage,
                    buttonImageOnly: true,
                    buttonText: "Click here to show calendar",
                    onSelect: function (dateText, inst) {
                        Page_ClientValidate("CostReportDates");
                        this.focus();
                    }
                });
    });
}

function CheckForValidCostHistoryDates(source, args) {
    var elements = $("#" + source.id).parent().parent().find('*');
    var fromDt = "";
    var toDt = "";
    var totalDischarges = "";
    var ctlFromDt;
    var ctlToDt;
    var ctlTotalDischarges;
    var ctlName = "";
    var ctlChanged = "";
    var ctlPrevious = "";
    var ctlPreviousFromDt = "";
    var ctlPreviousToDt = "";
    var ret = false;
    var otherDtVal = "";
    var today = new Date();

    // custom validators
    var ctlcvEHCRH_CRFD;
    var ctlcvEHCRH_CRTD;
    var ctlcvEHCRH_TD;
    var ctlcvCompareDates;

    // elements contains all the controls in the current row that was being edited
    // in the cost history report grid
    elements.each(function (index) {
        if (this.id.length > 0) {
            if (this.id.indexOf("txtEHCRH_CRFD") != -1) {
                fromDt = this.value;
                ctlFromDt = this.id;
            }
            else if (this.id.indexOf("txtEHCRH_CRTD") != -1) {
                toDt = this.value;
                ctlToDt = this.id;
            }
            else if (this.id.indexOf("txtEHCRH_TD") != -1) {
                totalDischarges = this.value;
                ctlTotalDischarges = this.id;
            }
            else if (this.id.indexOf("hidEHCRH_CRFD") != -1) {
                ctlPreviousFromDt = this.id;
            }
            else if (this.id.indexOf("hidEHCRH_CRTD") != -1) {
                ctlPreviousToDt = this.id;
            }
            else if (this.id.indexOf("cvEHCRH_CRFD") != -1) {
                ctlcvEHCRH_CRFD = this.id;
            }
            else if (this.id.indexOf("cvEHCRH_CRTD") != -1) {
                ctlcvEHCRH_CRTD = this.id;
            }
            else if (this.id.indexOf("cvEHCRH_TD") != -1) {
                ctlcvEHCRH_TD = this.id;
            }
            else if (this.id.indexOf("cvCompareDates") != -1) {
                ctlcvCompareDates = this.id;
            }
        }
    });

    if (source.id == ctlcvEHCRH_CRFD) {
        ctlName = "Cost Report From Date";
        ctlChanged = ctlFromDt;
        ctlPrevious = ctlPreviousFromDt;
        otherDtVal = toDt;
    }
    else if (source.id == ctlcvEHCRH_CRTD) {
        ctlName = "Cost Report To Date";
        ctlChanged = ctlToDt;
        ctlPrevious = ctlPreviousToDt;
        otherDtVal = fromDt;
    }

    // if Cost Report History From or To Date is changed and there 
    // is something already entered in Total Discharges, give a 
    // warning message to user that the Total Discharges will be 
    // cleared if they proceed.
    if (totalDischarges != "" && document.getElementById(ctlPrevious).value != args.Value) {
        ret = confirm("A cost report date has been changed.  If you proceed, the Total Discharges value will be cleared.\nDo you wish to proceed?");
        // if they click OK to proceed clear total discharges and update the control that keeps track of the previously entered date
        if (ret) {
            document.getElementById(ctlTotalDischarges).value = "";
            document.getElementById(ctlPrevious).value = args.Value;
        }
            // if they click CANCEL do not clear total discharges and set the date back to what was previously entered,
            // but do not fire validation
        else {
            document.getElementById(ctlChanged).value = document.getElementById(ctlPrevious).value;
        }
    }
    else
        document.getElementById(ctlPrevious).value = args.Value;

    var d1;
    var d2;
    if (fromDt != "" && isDate(fromDt, source) == true)
        d1 = new Date(Date.parse(fromDt));
    if (toDt != "" && isDate(toDt, source) == true)
        d2 = new Date(Date.parse(toDt));

    document.getElementById(ctlcvCompareDates).innerHTML = "Cost Report From Date must be before Cost Report To Date.";

    // Cost Report History From and To dates must be entered and they must be in date format
    // But if the entire row is blank, don't show message.
    if (otherDtVal == "" && totalDischarges == "" && args.Value == "") {
        document.getElementById(ctlcvEHCRH_CRFD).innerHTML = "";
        document.getElementById(ctlcvEHCRH_CRTD).innerHTML = "";
        document.getElementById(ctlcvEHCRH_TD).innerHTML = "";
        args.IsValid = true;
    } // if the date has been cleared don't show compare dates validator and display error message
    else if (args.Value == "") {
        document.getElementById(ctlcvCompareDates).innerHTML = "";
        source.innerHTML = "Please enter a valid date.";
        args.IsValid = false;
    }  // if the date is not valid allow it to display the message from the isDate function so it is consistent w/ other pages
    else if (isDate(args.Value, source) == false && args.Value != "") {
        document.getElementById(ctlcvCompareDates).innerHTML = "";
        args.IsValid = false;
    }
    else if (args.Value != "" && isDate(args.Value, source) == true && Date.parse(args.Value) > today) {
        document.getElementById(ctlcvCompareDates).innerHTML = "";
        source.innerHTML = ctlName + " must be before today's date.";
        args.IsValid = false;
    } else {
        args.IsValid = true;
    }

}

function CheckForValidCostHisotryTotalDischarges(source, args) {
    var elements = $("#" + source.id).parent().parent().find('*');
    var fromDt = "";
    var toDt = "";
    var totalDischCtl;

    elements.each(function (index) {
        if (this.id.length > 0) {
            if (this.id.indexOf("txtEHCRH_CRFD") != -1) {
                fromDt = this.value;
            }
            else if (this.id.indexOf("txtEHCRH_CRTD") != -1) {
                toDt = this.value;
            }
            else if (this.id.indexOf("txtEHCRH_TD") != -1) {
                totalDischCtl = this;
            }
        }
    });

    if (totalDischCtl != null) {
        args.Value = removeLeadingZeros(args.Value);
        totalDischCtl.value = args.Value;
    }
    // blank rows are ok, but if something is entered, total discharges 
    // has to be > 0 and numeric
    if ((fromDt != "" || toDt != "") && args.Value == "") {
        source.innerHTML = "Please enter Total Discharges.";
        args.IsValid = false;
    }
    else if (args.Value == 0 && args.Value != "") {
        source.innerHTML = "Total Discharges must be greater than 0.";
        args.IsValid = false;
    }
    else if (isInteger(args.Value) == false) {
        source.innerHTML = "Total Discharges must be numeric.";
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function disableIt() {
    jQuery(".disableIt input").attr("disabled", "true");
}
function enableIt() {
    jQuery(".disableIt input").removeAttr("disabled");
}
function setEnable() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
}


function Hospitalvalidation() {
    if (IsSubmitted) {
        enableIt();
        return true;
    } else if (!isPageDirty && isPageComplete) {
        return true;
    }
    else {
        if (Page_ClientValidate('Question')) {
            if (!IsSubmitted && $('#' + rdoHospital + ' input:checked').val() == "True") {
                return confirm("In order to qualify for the incentive payment, the Final Rule states that an EP must NOT be hospital based. Please review your answer or click the OK button to proceed.\nDo you wish to proceed?");
            }
        }
        return true;
    }
}

function HospitalvalidationPrev() {
    if (IsSubmitted) {
        enableIt();
        return true;
    } else {
        if (Page_ClientValidate('Question')) {
            if (!IsSubmitted && $('#' + rdoHospital + ' input:checked').val() == "True") {
                return false; //confirm("In order to qualify for the incentive payment, the Final Rule states that an EP must NOT be hospital based. Please review your answer or click the OK button to proceed.\nDo you wish to proceed?");
            }
        }
        else {
            return false;
        }
        return true;
    }
}

function setPageValidation() {
    var hideValidation = true;
    var retValue = true;
    var blockSubmit = false;

    if (typeof (Page_ClientValidate) != "undefined") {
        var pathName = window.location.pathname.toLowerCase();
        if (pathName.indexOf("providerportal"))
            pathName = pathName.replace("/providerportal", "");
        switch (pathName) {
            case "/attestation/license.aspx":
                Page_ClientValidate();
                jQuery("#" + hfIsPagevalid).val(jQuery(Page_Validators).filter(":visible").length == 0);
                break;
            case "/attestation/fqhc/list.aspx":
                if (isPageDirty || !isPageComplete) {
                    jQuery("#" + hfIsPagevalid).val(CheckProceedFQHCPrev());
                } else {
                    jQuery("#" + hfIsPagevalid).val(true);
                }
                break;
            case "/attestation/hospital/list.aspx":
                if (isPageDirty || !isPageComplete) {
                    jQuery("#" + hfIsPagevalid).val(HospitalvalidationPrev)
                } else {
                    jQuery("#" + hfIsPagevalid).val(true);
                }
                break;
            case "/attestation/grouppractice/grouppractice.aspx":
                jQuery("#" + hfIsPagevalid).val(ValidateGroupPracticePrev());
                break;
            case "/attestation/epehr/list.aspx":
                if (isPageDirty || !isPageComplete) {
                    jQuery("#" + hfIsPagevalid).val(getMessagePrev());
                } else {
                    jQuery("#" + hfIsPagevalid).val(true);
                }
                break;
            case "/attestation/aiu.aspx":
                jQuery("#" + hfIsPagevalid).val(AIUConfirmBoxPrev());
                break;
            case "/attestation/fqhc/attestationparticipation.aspx":
                Page_ClientValidate();
                jQuery("#" + hfIsPagevalid).val(jQuery(Page_Validators).filter(":visible").length == 0)
                break;
            case "/attestation/eh/contacts.aspx":
                $("#" + hfIsPagevalid).val(Page_ClientValidate());
                break;
            case "/attestation/eh/patientvolume.aspx":
                if (isPageDirty || !isPageComplete) {
                    $("#" + hfIsPagevalid).val(Page_ClientValidate("StartDate"));
                    SaveCompletePage = false;
                    retValue = Page_ClientValidate("HospitalGrid");
                    if (!retValue)
                        hideValidation = false;
                    if (!CompleteGrid && $("#" + hfIsPagevalid).val() == "true")
                        $("#" + hfIsPagevalid).val("false");
                    if ($("#" + hfIsPagevalid).val() == "true") {
                        var percentage = $("#" + lblPercent).text();
                        $("#" + hfIsPagevalid).val(parseFloat(percentage) >= 10 && percentage != "N/A");
                    }
                } else {
                    jQuery("#" + hfIsPagevalid).val(true);
                }
                break;
            case "/attestation/eh/costreportdetails.aspx":
                var isValid = true;
                var isValidDate = true;
                var isValidData = true;
                var isValidTotals = true;
                var validator;

                for (var i = 0; i < Page_Validators.length; i++) {
                    validator = Page_Validators[i];
                    ValidatorEnable(validator, true);
                }

                isValidDate = Page_ClientValidate("StartDate");
                isValidData = Page_ClientValidate();
                if (($("#" + hCRDTX_TCDD).val() == "N/A" || $("#" + hCRDTI_TCDD).val() == "N/A"))
                    isValidTotals = false;

                // fire all the validators and if any of them are not valid, isValid = false
                if (!isValidDate || !isValidData || !isValidTotals)
                    isValid = false;

                $("#" + hfIsPagevalid).val(isValid);
                // disable validators on previous or when left 
                // menu nav links are clicked, but if the Save
                // button is clicked, do not disable
                if (document.getElementById(hidSave).value != "true") {
                    for (var i = 0; i < Page_Validators.length; i++) {
                        validator = Page_Validators[i];
                        ValidatorEnable(validator, false);
                    }
                    retValue = true;
                    blockSubmit = false;
                }
                else {
                    if (jQuery("#" + hfIsPagevalid).val() == "false") {
                        retValue = false;
                    }
                    else {
                        var evalDate = new Date($("#" + txtCRDTX_RPFD).val());
                        var endDate = new Date($("#" + txtCRDTX_RPTD).val());
                        evalDate.setFullYear(evalDate.getFullYear() + 1);
                        evalDate.setDate(evalDate.getDate() - 1);
                        if (endDate > evalDate || endDate < evalDate) {
                            var confirmation = confirm("The time period you have selected does not span 12 months.  Do you wish to proceed?");
                            if (confirmation) {
                                retValue = true;
                            } else {
                                retValue = false;
                            }
                        } else {
                            retValue = true;
                        }
                    }

                    if (!retValue && ($("#" + hCRDTX_TCDD).val() == "N/A" || $("#" + hCRDTI_TCDD).val() == "N/A"))
                        retValue = false;

                    blockSubmit = !retValue;
                    hideValidation = false;
                }
                document.getElementById(hidSave).value = "false";
                break;
            case "/attestation/eh/costreporthistory.aspx":
                var continueTotalsValidation = true;
                var isValid = true;
                hideValidation = false;

                // run date validation
                isValid = Page_ClientValidate("CostReportDates");
                for (var i = 0; i < Page_Validators.length; i++) {
                    if (Page_Validators[i].validationGroup == "CostReportDates") {
                        if (!Page_Validators[i].isvalid) {
                            continueTotalsValidation = false;
                        }
                    }
                }
                // only run the totals validation if the date validation passed
                if (continueTotalsValidation) {
                    isValid = Page_ClientValidate("CostReportTotals");
                }
                // if any validators caused an error, do not submit
                jQuery("#" + hfIsPagevalid).val(isValid);
                if (jQuery("#" + hfIsPagevalid).val() == "false") {
                    retValue = false;
                }
                else {
                    retValue = true;
                }
                blockSubmit = !retValue;
                $("#" + hfIsPageDirty).val(isPageDirty);
                break;
        }
        if (hideValidation == true)
            jQuery(Page_Validators).hide();

    } else {
        jQuery("#" + hfIsPagevalid).val("true");
    }
    Page_BlockSubmit = blockSubmit;
    return retValue;
}
function ShowRegisterSessionafterMinute() {
    setTimeout("DisplaySessionTimeout()", (GetSessionTimeout - ShowSessionafterMinute) * 60 * 1000);
}
function DisplaySessionTimeout() {
    var olddatenow = new Date();
    //var oldminutes = now.getMinutes();
    if (confirm(jQuery("#" + lblTimeout).text())) {
        var newdatenow = new Date();
        //var newdateminutes = nownewdatenowgetMinutes();
        //if (newdateminutes - oldminutes > ShowSessionafterMinute) {


        var idLabel = document.getElementById(uxWinID);
        var cookieName = "winID__" + idLabel.innerHTML;

        var winIDCookie = getCookie(cookieName);


        if (getTheDiffTime(newdatenow, olddatenow, 'Minutes') <= ShowSessionafterMinute) {
            jQuery.ajax(
{
    url: '/ExtraPage.aspx?KEYWORD=RELOAD_SESSION_TIMEOUT',
    cache: false,
    success: function (data) {
        //Reset the function
        ShowRegisterSessionafterMinute();
        if (winIDCookie != "") {
            setCookie(cookieName, 0, GetSessionTimeout);
        }
    }
});
        }
        else {
            setCookie(cookieName, 0, 0);
            alert("Your session has expired.");
        }
    }
}

function MyFunction() {
    alert("Dhoom");
}

function getTheDiffTime(dateone, datetwo, format) {
    //format = “Days”, Hours, Minutes, Seconds
    if (dateone > datetwo) {
        var seconds = (dateone.getTime()) - (datetwo.getTime());
    } else {
        var seconds = (datetwo.getTime()) - (dateone.getTime());
    }
    var second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;
    if (format == 'Days') {
        var rformat = Math.floor(seconds / day);
        seconds -= rformat * day;
        //alert(“days: “+rformat);
    } else if (format == 'Hours') {
        // find the hours
        rformat = trunc(seconds / hour);
        //alert(“hours: “+rformat);
    } else if (format == 'Minutes') {
        //find the mintues
        rformat = trunc(seconds / minute);
        //alert('minutes: ' + rformat);
        //alert(“minutes: “+ rformat);
    } else if (format == 'Seconds') {
        //find the seconds
        rformat = trunc(seconds / second);
        //alert(“seconds: “+rformat);
    }

    return rformat
    //alert(rformat);

}
function trunc(i) {
    var j = Math.round(i * 100);
    return Math.floor(j / 100) + (j % 100 > 0 ? "." + p(j % 100) : "");
}
function p(i) {
    return Math.floor(i / 10) + "" + i % 10;
}

function ChangeTimeoutSeconds() {
    //Change text.

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var _timeout = jQuery("#" + lblTimeout).text();
    alert(_timeout);
    jQuery("#" + lblTimeout).text(_timeout + ':' + sessionTimeout)
    //sessionTimeout = sessionTimeout - 1;

    // if (sessionTimeout >= 0)
    //  window.setTimeout("ChangeTimeoutSeconds()", 60000);
    //else {
    //    alert("Your current Session is over.");
    //}

    var timeValue = "" + ((hours > 12) ? hours - 12 : hours);
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue += (hours >= 12) ? " PM" : " AM";
    jQuery("#" + lblSessiondisplay).text(timeValue);
    // setTimeout("showtime()", 1000);
    setTimeout("ChangeTimeoutSeconds()", 1000);

}


function CheckNumeric() {
    $('.IsNumeric')
    .keydown(function (event) {
        var key = event.which;
        if (event.shiftKey == true)
            return (key == 36 || key == 35 || key == 39 || key == 37 || key == 9);
        else//When SHIFT key is not down
            return ((key >= 48 && key <= 57) || key == 8 || key == 9 || key == 37 || key == 39 || key == 46 || key == 36 || key == 35 || (key >= 96 && key <= 105));
    }).bind('paste', function (event) {
        return (!isNaN(clipboardData.getData("text")));
    }).keyup(function (event) {
        var _Value = $(event.target).val();
        var _OldValue = $(event.target).val();
        for (var iCount = 0; iCount < _OldValue.length; iCount++) {
            if (_Value.charAt(0) == 0) {
                _Value = _Value.substring(1, _Value.length);
                $(event.target).val(_Value);
            }
        }
    }).focusout(function (event) {
        var _Value = $(event.target).val();
        var _OldValue = $(event.target).val();
        for (var iCount = 0; iCount < _OldValue.length; iCount++) {
            if (_Value.charAt(0) == 0) {
                _Value = _Value.substring(1, _Value.length);
                $(event.target).val(_Value);
            }
        }
    }).keypress(function (event) {
        var _Value = $(event.target).val();
        var _OldValue = $(event.target).val();
        for (var iCount = 0; iCount < _OldValue.length; iCount++) {
            if (_Value.charAt(0) == 0) {
                _Value = _Value.substring(1, _Value.length);
                $(event.target).val(_Value);
            }
        }
    });
}


//below function is for disable pate in end date
function DisablePaste() {
    $('.DisablePaste')
    .keydown(function (event) {
        if (event.keyCode == 9) {
            return true;
        }
        else {
            return false;
        }
    }).bind('paste', function (event) {
        return false;
    }).keyup(function (event) {
        return false;
    });
    //&& parseInt(_Value.length) > 1
}

function getMessage() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else if (!isPageDirty && isPageComplete) {
        return true;
    }
    else {
        if (Page_ClientValidate('EPValidate')) {
            var Ehrpercentage = jQuery("#" + hndCalculateValue).val();
            var validpercentage = jQuery("#" + hndPatientValue).val();

            //     alert(parseFloat(Ehrpercentage));
            //     alert(parseInt(validpercentage));
            // Updated for FogBugz 1583 - EHR Percentage must be 30% or greater.
            if (parseFloat(Ehrpercentage) >= parseInt(validpercentage)) {
                return true;
            }
            else {
                var yes = confirm('The data entered on this screen doesn’t meet program requirements for an EHR incentive payment.\nDo you wish to proceed?')
                if (yes) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
}
function getMessagePrev() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else {
        if (Page_ClientValidate('EPValidate')) {
            var Ehrpercentage = jQuery("#" + hndCalculateValue).val();
            var validpercentage = jQuery("#" + hndPatientValue).val();
            // Updated for FogBugz 1583 - EHR Percentage must be 30% or greater.
            return (parseFloat(Ehrpercentage) >= parseInt(validpercentage));
        }
        else {
            return false;
        }
    }
}
function GetConfirmBox() {
    var Ehrpercentage = jQuery("#" + FQHCTotalPatientEncounter).val();
    var validpercentage = jQuery("#" + FQHCAllLocationTPE).val();
    var value = (parseFloat(Ehrpercentage) / parseFloat(validpercentage)) * 100;
    alert(value);
    if (value < 50) {
        alert("Done");
        return true;
    }
    else {
        // alert("gauravtest");
        var yes = confirm('Do you wish to proceed?')
        if (yes) {
            return true;
        }
        else {
            return false;
        }
    }
}


function TotalPatientVolume() {
    var _MCPEE;
    var _TPEE;
    var _CalculateP
    _MCPEE = $("#" + GTMECPE).html();
    _TPEE = $("#" + GTPE).html();
    _CalculateP = (parseFloat(_MCPEE) / parseFloat(_TPEE)) * 100;
    if (_CalculateP > 0)
    { jQuery("#" + hndCalculateValue).val(parseFloat(_CalculateP).toFixed(2)); }
}

function Changevalue(elem, flag, ValElem) {
    var TPERequired = jQuery("#" + lblTPERequired).text();
    var MCPERequired = jQuery("#" + lblMCPERequired).text();

    if (flag > 0) {
        var _MCPE;
        var _TPE;
        if (flag == 1) {
            _MCPE = jQuery(elem).val();
            _TPE = jQuery(elem).parent().next().find("input:first").val();
        } else {
            _TPE = jQuery(elem).val();
            _MCPE = jQuery(elem).parent().prev().find("input:first").val();
        } if (isNaN(_MCPE) || isNaN(_TPE)) {
            return false;
        }
    }
    var _grdtxtNPIMCPE = 0;
    jQuery(".txtNPIMCPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtNPIMCPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtNPITPE = 0;
    jQuery(".txtNPITPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtNPITPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtMCPE = 0;
    jQuery(".txtMCPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtMCPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtTPE = 0;
    jQuery(".txtTPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtTPE += parseInt(jQuery(this).val());
        }
    });
    var _totalMCPE;
    var _totalTPE;
    _totalMCPE = _grdtxtMCPE + parseInt(_grdtxtNPIMCPE);
    _totalTPE = _grdtxtTPE + parseInt(_grdtxtNPITPE);

    if (parseInt(_grdtxtMCPE) > 0) {
        $(".lblGTMCPE").text(_grdtxtMCPE);
    }
    else { $(".lblGTMCPE").text(''); }
    if (parseInt(_grdtxtTPE) > 0) {
        $(".lblGTPE").text(_grdtxtTPE);
    }
    else { $(".lblGTPE").text(''); }

    jQuery("#" + GTMECPE).text(_totalMCPE);
    jQuery("#" + GTPE).text(_totalTPE);
    var _CalculatePercent = 0;

    if (_totalTPE > 0)
    { _CalculatePercent = (_totalMCPE / _totalTPE) * 100; }

    jQuery("#" + hndCalculateValue).val(parseFloat(_CalculatePercent).toFixed(2));
    //if (_CalculatePercent > 0)
    var NotApplicableCheck = jQuery("#" + lblNotApplicable).text();
    if (parseInt(_CalculatePercent) > 0 && parseInt(_CalculatePercent) <= 100) {
        jQuery("#" + TotalPercent).text(parseFloat(_CalculatePercent).toFixed(2) + "%");
    }
    else { jQuery("#" + TotalPercent).text(NotApplicableCheck); }


    if (ValElem != null) {
        if (_MCPE == 0 && _TPE == 0) {
            elem.Validators[0].enabled = false;
            ValElem.enabled = false;
            //if (flag == 2)
            // elem.Validators[0].innerHTML = "";

        }
        else {
            //            if (flag == 2)
            //                elem.Validators[0].innerHTML = TPERequired;
            //            if (flag == 1)
            //                elem.Validators[0].innerHTML = MCPERequired;
        }
    }
}
function ChangeNPIvalue(elem, flag) {
    if (flag > 0) {
        var _MCPE;
        var _TPE;
        if (flag == 1) {
            _MCPE = jQuery(elem).val();
            _TPE = jQuery(elem).parent().next().find("input:first").val();
        }
        else {
            _TPE = jQuery(elem).val();
            _MCPE = jQuery(elem).parent().prev().find("input:first").val();
        }
        if (isNaN(_MCPE) || isNaN(_TPE)) {
            return false;
        }
    }
    var _grdtxtMCPE = 0;
    jQuery(".txtMCPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtMCPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtTPE = 0;
    jQuery(".txtTPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtTPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtNPIMCPE = 0;
    jQuery(".txtNPIMCPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtNPIMCPE += parseInt(jQuery(this).val());
        }
    });
    var _grdtxtNPITPE = 0;
    jQuery(".txtNPITPE").each(function () {
        if (jQuery.trim(jQuery(this).val()).length > 0) {
            _grdtxtNPITPE += parseInt(jQuery(this).val());
        }
    });
    if (parseInt(_grdtxtNPIMCPE) > 0) {
        $(".lblNPIGTMCPE").text(_grdtxtNPIMCPE);
    }
    else { $(".lblNPIGTMCPE").text(''); }
    if (parseInt(_grdtxtNPITPE) > 0) {
        $(".lblNPIGTPE").text(_grdtxtNPITPE);
    }
    else { $(".lblNPIGTPE").text(''); }
    var _totalMCPE;
    var _totalTPE;
    _totalMCPE = _grdtxtNPIMCPE + parseInt(_grdtxtMCPE);
    _totalTPE = _grdtxtNPITPE + parseInt(_grdtxtTPE);

    if (parseInt(_grdtxtMCPE) > 0) {
        $(".lblGTMCPE").text(_grdtxtMCPE);
    }

    if (parseInt(_grdtxtTPE) > 0) {
        $(".lblGTPE").text(_grdtxtTPE);
    }

    jQuery("#" + GTMECPE).text(_totalMCPE);
    jQuery("#" + GTPE).text(_totalTPE);
    var _CalculatePercent = 0;
    if (_totalTPE > 0) {
        _CalculatePercent = (_totalMCPE / _totalTPE) * 100;
    }

    //if (_CalculatePercent > 0)
    var NotApplicableCheck = jQuery("#" + lblNotApplicable).text();
    jQuery("#" + hndCalculateValue).val(parseFloat(_CalculatePercent).toFixed(2));
    if (parseInt(_CalculatePercent) > 0 && parseInt(_CalculatePercent) <= 100) {
        jQuery("#" + TotalPercent).text(parseFloat(_CalculatePercent).toFixed(2) + "%");
    }
    else { jQuery("#" + TotalPercent).text(NotApplicableCheck); }
}

function compareEHRvalue() {
    var _MCPE;
    var _TPE;
    //    //debugger;

    _MCPE = jQuery("#" + txtMCPE).val();
    _TPE = jQuery("#" + txtPCE).val();

    if (isNaN(_MCPE) || isNaN(_TPE) || jQuery.trim(_MCPE).length <= 0 || jQuery.trim(_TPE).length <= 0) {
        return false;
    }
    else {

        if (parseInt(_MCPE) > parseInt(_TPE)) {
            //alert("Total Medicaid Covered Patient Encounters should be greater than Medicaid Covered Patient Encounter");
            return false;
        }
    }
    jQuery("#" + GTMECPE).text(_MCPE);
    jQuery("#" + GTPE).text(_TPE);

    var _CalculatePercent = 0;
    if (_TPE > 0) {
        _CalculatePercent = (_MCPE / _TPE) * 100;
    }
    jQuery("#" + TotalPercent).text(parseFloat(_CalculatePercent).toFixed(2) + "%");
}

function CompareGridValuesMCPE(source, args) {
    var _control = jQuery(source);
    var compareTo = jQuery("#" + _control.attr("title"));

    var ReqValidatorID = jQuery("#" + compareTo[0].Validators[0].id);
    var ValidatorID = jQuery("#" + compareTo[0].Validators[1].id);
    var IsNeedy = jQuery("#" + hndIsNeedy).val();
    var McpeValidCheck = jQuery("#" + lblMcpeValid).text();
    var McpeValidNeedyCheck = jQuery("#" + lblMcpeValidNeedy).text();
    var McpeValidMedNumCheck = jQuery("#" + lblMcpeValidMed).text();
    var McpeValidNeedNumCheck = jQuery("#" + lblMcpeValidNeed).text();
    var McpeValidMedPositiveCheck = jQuery("#" + lblMcpeValidMedPositive).text();
    var McpeValidNeedPositiveCheck = jQuery("#" + lblMcpeValidNeedPositive).text();
    var TPERequired = jQuery("#" + lblTPERequired).text();
    var MCPERequired = jQuery("#" + lblMCPERequired).text();


    if (isNaN(jQuery.trim(args.Value))) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(McpeValidMedNumCheck);
        }
        else { _control.text(McpeValidNeedNumCheck); }
        args.IsValid = false;
    }
    else if (parseInt(jQuery.trim(args.Value)) < 0) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(McpeValidMedPositiveCheck);
        }
        else { _control.text(McpeValidNeedPositiveCheck); }
        args.IsValid = false;
    }
    else if (parseInt(jQuery.trim(args.Value)) > parseInt(compareTo.val())) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(McpeValidCheck);
        }
        else { _control.text(McpeValidNeedyCheck); }
        args.IsValid = false;
    }
    else if (compareTo.val() == "" && jQuery.trim(args.Value) != "") {

        ReqValidatorID[0].enabled = true;
        ReqValidatorID[0].isvalid = false;
        compareTo.focus();
        $(source).prev()[0].innerHTML = MCPERequired;
        ReqValidatorID[0].innerHTML = TPERequired;
    }
    else if (compareTo.val() == "" && jQuery.trim(args.Value) == "" && $(source).parent().parent().find('.OwnMPN').text().toLowerCase() == "true") {
        args.IsValid = true;
        //ValidatorID[0].isvalid = true;
        //ValidatorID[0].innerHTML = "";
        $(source).prev()[0].isvalid = true;
        $(source).prev()[0].enabled = false;
        $(source).prev()[0].innerHTML = "";
        ReqValidatorID[0].isvalid = true;
        ReqValidatorID[0].innerHTML = "";
    }
    else {
        args.IsValid = true;
        ValidatorID[0].isvalid = true;
        ValidatorID[0].innerHTML = "";
        $(source).prev()[0].innerHTML = MCPERequired;
    }
}
function CompareGridValuesTPE(source, args) {
    var _control = jQuery(source);
    var compareTo = jQuery("#" + _control.attr("title"));

    var ReqValidatorID = jQuery("#" + compareTo[0].Validators[0].id);
    var ValidatorID = jQuery("#" + compareTo[0].Validators[1].id);
    var IsNeedy = jQuery("#" + hndIsNeedy).val();
    var TpeValidCheck = jQuery("#" + lblTpeValid).text();
    var TpeValidNeedyCheck = jQuery("#" + lblTpeValidNeedy).text();
    var TpeValidMedNumCheck = jQuery("#" + lblTpeValidMed).text();
    var TpeValidNeedNumCheck = jQuery("#" + lblTpeValidNeed).text();
    var TpeValidMedPositiveCheck = jQuery("#" + lblTpeValidMedPositive).text();
    var TpeValidNeedPositiveCheck = jQuery("#" + lblTpeValidNeedPositive).text();
    var TPERequired = jQuery("#" + lblTPERequired).text();
    var MCPERequired = jQuery("#" + lblMCPERequired).text();

    if (isNaN(jQuery.trim(args.Value))) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(TpeValidMedNumCheck);
        }
        else {
            _control.text(TpeValidNeedNumCheck);
        }
        args.IsValid = false;
    }
    else if (parseInt(jQuery.trim(args.Value)) < 0) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(TpeValidMedPositiveCheck);
        }
        else {
            _control.text(TpeValidNeedPositiveCheck);
        }
        args.IsValid = false;
    }
    else if (parseInt(jQuery.trim(args.Value)) < parseInt(compareTo.val())) {
        if (parseInt(IsNeedy) == 0) {
            _control.text(TpeValidCheck);
        }
        else {
            _control.text(TpeValidNeedyCheck);
        }
        args.IsValid = false;
    }
    else if (compareTo.val() == "" && jQuery.trim(args.Value) != "") {
        ReqValidatorID[0].enabled = true;
        ReqValidatorID[0].isvalid = false;
        compareTo.focus();
        $(source).prev()[0].innerHTML = TPERequired;
        ReqValidatorID[0].innerHTML = MCPERequired;
    }
    else if (compareTo.val() == "" && jQuery.trim(args.Value) == "" && $(source).parent().parent().find('.OwnMPN').text().toLowerCase() == "true") {
        args.IsValid = true;
        //ValidatorID[0].isvalid = true;
        //ValidatorID[0].innerHTML = "";
        $(source).prev()[0].isvalid = true;
        $(source).prev()[0].enabled = false;
        $(source).prev()[0].innerHTML = "";
        ReqValidatorID[0].isvalid = true;
        ReqValidatorID[0].innerHTML = "";

    }
    else {
        args.IsValid = true;
        ValidatorID[0].isvalid = true;
        ValidatorID[0].innerHTML = "";
        $(source).prev()[0].innerHTML = TPERequired;
    }
}

//function CompareFQHCValuesTPE(source, args) {
//    debugger;
//    var _control = jQuery(source);
//    var compareTo = jQuery("#" + _control.attr("compareTo"));
//    // var ValidatorID = jQuery("#" + compareTo[0].Validators[1].id);
//    var ValidatorID = jQuery("#" + compareTo.Validators[1].id);
//    if (isNaN(jQuery.trim(args.Value))) {
//        _control.text("Please enter 1-10 digit(s) Total Patient Encounter of FQHC/SBHC/RHC.");
//        args.IsValid = false;
//    } else if (parseInt(jQuery.trim(args.Value)) < 0) {
//     _control.text("Total Patient Encounter of FQHC/SBHC/RHC should be positive number.");
//        args.IsValid = false;
//    } else if (parseInt(jQuery.trim(args.Value)) > parseInt(compareTo.val())) {
//    _control.text("TPE at an FQHC/SBHC/RHC should be less than TPE at all locations.");
//        args.IsValid = false;
//    } else {
//        args.IsValid = true;
//        ValidatorID[0].isvalid = true;
//        ValidatorID[0].innerHTML = "";
//    }
//   
//}
//function CompareFQHCValuesGTPE(source, args) {
//    var _control = jQuery(source);
//    var compareTo = jQuery("#" + _control.attr("compareTo"));
//    //var ValidatorID = jQuery("#" + compareTo[0].Validators[1].id);
//    var ValidatorID = jQuery("#" + compareTo.Validators[1].id);
//    if (isNaN(jQuery.trim(args.Value))) {
//        _control.text("Please enter 1-10 digit(s) Total Patient Encounter of all location.");
//        args.IsValid = false;
//    } else if (parseInt(jQuery.trim(args.Value)) < 0) {
//       _control.text("Total Patient Encounter of all location should be positive number.");
//        args.IsValid = false;
//    } else if (parseInt(jQuery.trim(args.Value)) > parseInt(compareTo.val())) {
//      _control.text("TPE at all locations must be greater than TPE at an FQHC/SBHC/RHC.");
//        args.IsValid = false;
//    } else {
//        args.IsValid = true;
//        ValidatorID[0].isvalid = true;
//        ValidatorID[0].innerHTML = "";
//    }

//}

/////////////////////////////////////////

function CheckForStateData(source, args) {
    var _control = jQuery(source);
    var compareTo = jQuery("#" + _control.attr("title"));

    var ValidatorID = jQuery("#" + compareTo[0].Validators[0].id);
    var NPICheck = jQuery("#" + lblNPI).text();
    var NPIDigitCheck = jQuery("#" + lblNPIDigit).text();
    var GroupMPNCheck = jQuery("#" + lblGroupMPN).text();

    if (args.Value == "" || args.Value == document.getElementById(hidGroupNPIMessage).value) {
        if (_control.context.className == "valid_errormsg") {
            _control.text(NPICheck);
            args.IsValid = false;
        }
    }
    else if (isNaN(jQuery.trim(args.Value)) || jQuery.trim(args.Value).length != 10) {
        _control.text(NPIDigitCheck);
        args.IsValid = false;
    }
    if (_control.context.className != "valid_errormsg") {
        if (jQuery.trim(args.Value).length > 0 && jQuery.trim(args.Value) != document.getElementById(hidGroupNPIMessage).value && jQuery.trim(compareTo.val()).length == 0) {
            ValidatorID[0].enabled = true;
            ValidatorID[0].isvalid = false;
            compareTo.focus();
        }
        else if (jQuery.trim(compareTo.val()).length > 0 && jQuery.trim(args.Value) == document.getElementById(hidGroupNPIMessage).value) {
            _control.text(GroupMPNCheck);
            args.IsValid = false;
        }
        else {
            ValidatorID[0].enabled = false;
            ValidatorID[0].isvalid = true;
        }
    }
}


function CheckForGroupDataData(source, args) {
    var _control = jQuery(source);
    var compareTo = jQuery("#" + _control.attr("title"));

    var ValidatorID = jQuery("#" + compareTo[0].Validators[0].id);
    var GroupMPNCheck = jQuery("#" + lblGroupMPN).text();
    var GroupMPNValidCheck = jQuery("#" + lblGroupMPNValid).text();
    var OwnGroupMPNCheck = jQuery("#" + lblOwnGroupMPN).text();

    if (args.Value == "" || args.Value == document.getElementById(hidMPNMessage).value) {
        if (_control.context.className == "valid_errormsg") {
            _control.text(GroupMPNCheck);
            args.IsValid = false;
        }
    }
    else if (jQuery.trim(args.Value).length < 6) {
        _control.text(GroupMPNValidCheck);
        args.IsValid = false;
    }
    else if (jQuery.trim(args.Value) == document.getElementById(hidOwnMPN).value && document.getElementById(hidOwnMPN).value != "") {
        //var OwnGroupMPN = OwnGroupMPN.format(document.getElementById(hidOwnMPN).value);
        var OwnGroupMPN = OwnGroupMPNCheck.format(document.getElementById(hidOwnMPN).value);
        //_control.text(OwnGroupMPNCheck);
        _control.text(OwnGroupMPN);
        args.IsValid = false;
    }
    if (_control.context.className != "valid_errormsg") {
        if (jQuery.trim(args.Value).length > 0 && jQuery.trim(args.Value) != document.getElementById(hidMPNMessage).value && jQuery.trim(compareTo.val()).length == 0) {
            ValidatorID[0].enabled = true;
            ValidatorID[0].isvalid = false;
            compareTo.focus();
        }
        else if (jQuery.trim(compareTo.val()).length > 0 && jQuery.trim(args.Value) == document.getElementById(hidMPNMessage).value) {
            _control.text(GroupMPNCheck);
            args.IsValid = false;
        }
        else {
            ValidatorID[0].enabled = false;
            ValidatorID[0].isvalid = true;
        }
    }
}

function CheckForGroupPracticeData(source, args) {
    var _control = jQuery(source);
    var GroupMPNCheck = jQuery("#" + lblGroupMPN).text();
    var GroupMPNValidCheck = jQuery("#" + lblGroupMPNValid).text();
    var OwnGroupMPNCheck = jQuery("#" + lblOwnGroupMPN).text();
    if (args.Value == "" || args.Value == document.getElementById(hidMPNMessage).value) {
        _control.text(GroupMPNCheck);
        args.IsValid = false;
    }
    else if (jQuery.trim(args.Value).length < 6) {
        _control.text(GroupMPNValidCheck);
        args.IsValid = false;
    }
    else if (jQuery.trim(args.Value) == document.getElementById(hidOwnMPN).value && document.getElementById(hidOwnMPN).value != "") {
        //var OwnGroupMPN = OwnGroupMPN.format(document.getElementById(hidOwnMPN).value);
        var OwnGroupMPN = OwnGroupMPNCheck.format(document.getElementById(hidOwnMPN).value);
        //_control.text(OwnGroupMPNCheck);
        _control.text(OwnGroupMPN);
        args.IsValid = false;
    }
}
///////////////////////////////////////////////////////////////////

function NumericValidation(e) {
    // debugger;
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox
    //alert(key);
    //    if (event.keyCode >= 48 && event.keyCode <= 57) {
    if ((key >= 48 && key <= 57) || key == 8 || key == 9 || key == 16 || key == 17 || key == 20) {
        return true;
        // alert(event.keyCode);
    }
    else {
        alert("Please input numeric value.");
        return false;
    }
}

function ShowHideGroupDetails() {
    jQuery("#" + searchPanel).show();
    adjustFooter();
}
/* Slide Left Menu | Praveen Matoria | START */
var pnlPageMaringLeft = 0;
var leftMenuSlide = function () {
    pnlPageMaringLeft = parseInt(jQuery("#" + pnlPage).css("margin-left"));
    jQuery(".left-arrow").click(function () {
        if (jQuery(this).hasClass("animate")) {
            jQuery("#left-sidebar").animate({ left: 0 });
            jQuery("#" + pnlPage).animate({ marginLeft: pnlPageMaringLeft });
            jQuery(this).removeClass("animate");
        } else {
            jQuery("#left-sidebar").animate({ left: -(pnlPageMaringLeft - 12) });
            jQuery("#" + pnlPage).animate({ marginLeft: 10 });
            jQuery(this).addClass("animate");
        }
    });
    adjustFooter();
};
var adjustFooter = function () {
    jQuery(".right-main").height('');
    var mainContentHeight = jQuery(".right-main").outerHeight() + jQuery(".right-border-bot").outerHeight();
    if (mainContentHeight > jQuery(".side-menu").outerHeight() + 11)
        jQuery(".tab-main").height(mainContentHeight - (parseInt(jQuery(".tab-main").css('padding-top')) + 4));
    else {
        jQuery(".tab-main").height(jQuery(".side-menu").outerHeight() + 11);
        jQuery(".right-main").height(jQuery(".side-menu").outerHeight() + 11);
    }
};
/* Slide Left Menu | Praveen Matoria | END */
/*Global Function | START*/
function showDatepicker() {
    var oMaxDate = new Date(maxYear, maxMonth - 1, maxDay);

    var oMinDate = new Date(minYear, minMonth - 1, minDay),
        defaultDate = "1/1/2010";

    $("#" + txtStartDate)
    .datepicker({
        showOn: "button",
        defaultDate: defaultDate,
        buttonImage: datepickerImage,
        buttonImageOnly: true,
        buttonText: "Click here to show calendar",
        minDate: oMinDate,
        maxDate: oMaxDate,
        onSelect: function (dateText, inst) {
            if (Page_ClientValidate(typeof (monthDifference) != 'undefined' ? "FQHC" : "StartDate")) {
                SetEndDate(dateText);
            }
            this.focus();
        }
    });
}


function showDatepicker(textBoxName) {

    $("#" + textBoxName).datepicker({
        changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
        buttonImageOnly: true,
        minDate: "01/01/2000",
        maxDate: "12/31/2050",
        yearRange: "2000:2050",
        showOn: 'button',
        buttonText: "Click here to show calendar",
        onSelect: function () {
            // The "this" keyword refers to the input (in this case: #someinput)
            this.focus();
            //force datepicker pop-up to close
            $("#ui-datepicker-div").css('display', 'none');
        }
    });
}


function showDatepickerPatientVolume() {
    var oMaxDate = new Date(maxYear, maxMonth - 1, maxDay);

    var oMinDate = new Date(minYear, minMonth - 1, minDay),
        defaultDate = "10/1/2009";

    $("#" + txtStartDate)
    .datepicker({
        showOn: "button",
        defaultDate: defaultDate,
        buttonImage: datepickerImage,
        buttonImageOnly: true,
        buttonText: "Click here to show calendar",
        minDate: oMinDate,
        maxDate: oMaxDate,
        onSelect: function (dateText, inst) {
            if (Page_ClientValidate(typeof (monthDifference) != 'undefined' ? "FQHC" : "StartDate")) {
                SetEndDate(dateText);
            }
        }
    });
}

/*
* DHTML date validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
*/
function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary(year) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}
function DaysArray(n) {
	var arrDays = [n];
    for (var i = 1; i <= n; i++) {
        arrDays[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) { arrDays[i] = 30 }
        if (i == 2) { arrDays[i] = 29 }
    }
    return arrDays;
}

function isDate(dtStr, errorControl) {
    var dtCh = "/";
    var minYear = 1900;
    var maxYear = 2100;
    var lblDateFormatCheck = jQuery("#" + lblDateFormat).text();
    var lblValidDateCheck = jQuery("#" + lblValidDate).text();
    var lblDateRangeCheck = jQuery("#" + lblDateRange).text();
    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strMonth = dtStr.substring(0, pos1)
    var strDay = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear
    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
    }
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYr)
    if (pos1 == -1 || pos2 == -1) {
        $(errorControl).text(lblDateFormatCheck);
        return false
    }
    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
        var lblDateRangeCheck = lblDateRangeCheck.format(minYear, maxYear);
        $(errorControl).text(lblDateRangeCheck);
        return false
    }

    if (strMonth.length < 1 || month < 1 || month > 12 || //In valid month
	    strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month] || //In valid day
	    dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        $(errorControl).text(lblValidDateCheck)
        return false
    }
    return true
}

function isDateVal(dtStr) {
    var dtCh = "/";
    var minYear = 1899;
    var maxYear = 2051;
    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strMonth = dtStr.substring(0, pos1)
    var strDay = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear
    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
    }
    if (strYear.length == 2) strYear = "20" + strYear;
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYear)
    if (pos1 == -1 || pos2 == -1) {
        return false;
    }
    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
        return false;
    }

    if (strMonth.length < 1 || month < 1 || month > 12 || //In valid month
	    strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month] || //In valid day
	    dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        return false;
    }
    return true;
}

function ValidateDate(oSrc, args) {
    if (!isDateVal(args.Value)) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\[' + i + '\\]', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);

    }
    return formatted;
}

function CheckForDate(source, args) {
    if (isDate(args.Value, source) == false) {//Is date valid
        args.IsValid = false;
    } else {//Checking date valid range
        var _control = jQuery(source);

        //        if (typeof (monthDifference) != 'undefined')
        //            oMaxDate = $.datepicker.formatDate('mm/dd/yy', LastDayOfMonth(maxYear, maxMonth));
        //        else
        //            oMaxDate = maxMonth + "/" + maxDay + "/" + maxYear;

        var oMaxDate = maxMonth + "/" + maxDay + "/" + maxYear;

        var oMinDate = minMonth + "/" + minDay + "/" + minYear;
        var dateText = new Date(Date.parse(args.Value));

        if (dateText < new Date(Date.parse(oMinDate)) || dateText > new Date(Date.parse(oMaxDate))) {//Checking date valid range
            var lblStartDateValidCheck = jQuery("#" + lblStartDateValid).text();
            lblStartDateValidCheck = lblStartDateValidCheck.format(oMinDate, oMaxDate)
            _control.text(lblStartDateValidCheck);
            args.IsValid = false;
        } else {//Date passed all validation
            SetEndDate(args.Value);
            args.IsValid = true;
        }
    }
}

function CheckForDateCostReportDetails(source, args) {
    var fromDt = jQuery("#" + txtCRDTX_RPFD).val();
    var toDt = jQuery("#" + txtCRDTX_RPTD).val();
    var d1;
    var d2;

    if (isDate(args.Value, source) == false) {//Is date valid
        args.IsValid = false;
    } else {//Checking date valid range
        var _control = jQuery(source);
        var lblDateRangeCheck = "Date should be between [0] and [1].";
        //        if (typeof (monthDifference) != 'undefined')
        //            oMaxDate = $.datepicker.formatDate('mm/dd/yy', LastDayOfMonth(maxYear, maxMonth));
        //        else
        //            oMaxDate = maxMonth + "/" + maxDay + "/" + maxYear;

        var oMaxDate = maxMonth + "/" + maxDay + "/" + maxYear;

        var oMinDate = minMonth + "/" + minDay + "/" + minYear;
        var dateText = new Date(Date.parse(args.Value));
        if (source.id.indexOf("CheckForDateFD") != -1) {
            lblDateRangeCheck = "From Date should be between [0] and [1].";
        }
        else if (source.id.indexOf("CheckForDateTD") != -1) {
            lblDateRangeCheck = "To Date should be between [0] and [1].";
        }
        if (dateText < new Date(Date.parse(oMinDate)) || dateText > new Date(Date.parse(oMaxDate))) {//Checking date valid range
            lblDateRangeCheck = lblDateRangeCheck.format(oMinDate, oMaxDate)
            _control.text(lblDateRangeCheck);
            args.IsValid = false;
        } else { // check to make sure the from date is before the to date
            if (fromDt != "" && isDateVal(fromDt) == true)
                d1 = new Date(Date.parse(fromDt));
            if (toDt != "" && isDateVal(toDt) == true)
                d2 = new Date(Date.parse(toDt));

            if (fromDt != "" && toDt != "" && isDateVal(fromDt) == true && isDateVal(toDt) == true && d1 > d2) {
                _control.text("From Date must be before To Date.");
                args.IsValid = false;
            } else { //Date passed all validation
                args.IsValid = true;
            }
        }
    }
}

function SetEndDate(dateText) {
    var StartDate = new Date(Date.parse(dateText));
    if (typeof (monthDifference) != 'undefined') {//FQHC Page
        var LastDayOfStartDateMonth = new Date(LastDayOfMonth(StartDate.getFullYear(), (StartDate.getMonth() + 1))).getDate();
        var LastDayofEndDateMonth;
        if (LastDayOfStartDateMonth == StartDate.getDate()) {
            LastDayofEndDateMonth = new Date(LastDayOfMonth(StartDate.getFullYear(), (StartDate.getMonth() + 1 + monthDifference))).getDate();
            endDate = $.datepicker.formatDate('mm/dd/yy', new Date(StartDate.getFullYear(), (StartDate.getMonth() + monthDifference), LastDayofEndDateMonth - 1));
        }
        else if (StartDate.getDate() == 1) {
            LastDayofEndDateMonth = new Date(LastDayOfMonth(StartDate.getFullYear(), (StartDate.getMonth() + monthDifference))).getDate();
            endDate = $.datepicker.formatDate('mm/dd/yy', new Date(StartDate.getFullYear(), (StartDate.getMonth() + monthDifference - 1), LastDayofEndDateMonth));
        }
        else {
            endDate = $.datepicker.formatDate('mm/dd/yy', new Date(StartDate.getFullYear(), (StartDate.getMonth() + monthDifference), StartDate.getDate() - 1));
        }
    }
    else//Group Page
        endDate = $.datepicker.formatDate('mm/dd/yy', new Date(StartDate.getFullYear(), StartDate.getMonth(), (StartDate.getDate() + dayDifference)));

    //$("#" + txtEndDate).val(endDate);
    $("#" + lblEndDate).text(endDate);
    //alert(typeof (hdnEndDate));
    if (typeof (hdnEndDate) != 'undefined') {
        $("#" + hdnEndDate).val(endDate);
    }
}


function showLicenseDatepicker() {
    $("#" + txtStartDate)
    .datepicker({
        showOn: "button",
        dateFormat: "mm/dd/yy",
        minDate: "01/01/1900",
        maxDate: "+0d",
        buttonImage: datepickerImage,
        buttonImageOnly: true,
        buttonText: "Click here to show calendar",
        onSelect: function (dateText, inst) {
            //addOrRemoveDate(dateText); 
            Page_ClientValidate("Save");
            this.focus();
        }
    });
    $("#" + txtEndDate)
    .datepicker({
        showOn: "button",
        dateFormat: "mm/dd/yy",
        minDate: "+1d",
        maxDate: "12/31/2100",
        buttonImage: datepickerImage,
        buttonImageOnly: true,
        buttonText: "Click here to show calendar",
        onSelect: function (dateText, inst) {
            Page_ClientValidate("Save");
            this.focus();
        }
    });
}
function CheckForLicenseDate(source, args) {
    if (isDate(args.Value, source) == false) {//Is date valid
        args.IsValid = false;
    } else {//Checking date valid range
        var _control = jQuery(source);
        var lblCurrentDateCheck = jQuery("#" + lblCurrentDate).text();
        var lblExpDateCheck = jQuery("#" + lblExpDate).text();
        var oDate = new Date(Date.parse($.datepicker.formatDate('mm/dd/yy', new Date()))),
            dateText = new Date(Date.parse(args.Value));
        if (_control[0].controltovalidate == txtStartDate) {//Current Date
            if (dateText > oDate) {
                _control.text(lblCurrentDateCheck);
                args.IsValid = false;
            }
        } else {//Expiry Date
            if (dateText <= oDate) {
                _control.text(lblExpDateCheck);
                args.IsValid = false;
            }
        }
    }
}
function LastDayOfMonth(Year, Month) {
    return new Date((new Date(Year, Month, 1)) - 1);
}
function searchSlide() {
    jQuery("legend", ".fieldset-wrapper").click(function () {
        $(this).toggleClass("collapsed").next().slideToggle(adjustFooter);
    });
}
// This Javascript is written by Peter Velichkov (http://blog.creonfx.com)
// and is distributed under the following license : http://creativecommons.org/licenses/by-sa/3.0/
// Use and modify all you want just keep this comment. Thanks
var incdec = 0;

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function loadCss() {
    var cssStr = 'body {font-size:' + (12 + incdec) + 'pt;}';
    jQuery("head").append('<style type="text/css">' + cssStr + '</style>');
}

function increaseFontSize() {

    if (incdec < 3) {
        incdec++;
        loadCss();
        createCookie('textsize', incdec, 1);
        indicatorFontSize();
        adjustFooter();
    }
}

function decreaseFontSize() {

    if (incdec > -3) {
        incdec--;
        loadCss();
        createCookie('textsize', incdec, 1);
        indicatorFontSize();
        adjustFooter();
    }
}
function indicatorFontSize() {
    jQuery("#fontPercent").text(parseInt((16 + incdec) / 16 * 100) + '%');
    resetFontWrapperWidth();
}
function FontSizePercent() {
    var textsize = readCookie('textsize');
    if (textsize && textsize != 0) {
        textsize = parseInt(textsize);
        incdec = textsize;
        loadCss(textsize);
        indicatorFontSize();
    } else {
        resetFontWrapperWidth();
    }
    jQuery("#breadcrumbFont").hover(function () {//show font resizer
        jQuery("#textSize:animated, #fontPercent:animated, #incdec:animated").stop();
        jQuery("#textSize, #fontPercent").animate({ top: -22, queue: false });
        jQuery("#incdec").animate({ top: 0, queue: false });
    }, function () {//show font size
        jQuery("#textSize:animated, #fontPercent:animated, #incdec:animated").stop();
        jQuery("#incdec").animate({ top: -22, queue: false });
        jQuery("#textSize, #fontPercent").animate({ top: 0, queue: false });
    });
}
function resetFontWrapperWidth() {
    jQuery("#resize-box").width(jQuery("#textSize").width() + jQuery("#fontPercent").width());
}
//function SelectAtMostOne(elem){
//    var $this = jQuery(elem);
//    $this.find("input:checked").attr("checked", false);
//    //
//}
function CheckBoxListIsEmpty(source, args) {
    var $this = $("#" + chklSiteTypes);
    args.IsValid = ($this.find("input:checked").length <= 1)
}

function CheckTotalPE(source, args) {
    var _totalpatientencounter = jQuery("#" + totalpatientencounter).val();
    var _sitetotalPE = $("#" + sitetotalPE).val();
    if (isNaN(_sitetotalPE) || _sitetotalPE == "" || jQuery.trim(_sitetotalPE).length <= 0)
        args.IsValid = true;
    else {
        if (parseInt(_sitetotalPE) >= parseInt(_totalpatientencounter))
            args.IsValid = true;
        else
            args.IsValid = false;
    }
}

function showTooltip() {
    jQuery(".tipButton").tooltip({
        track: true,
        showBody: "#|#",
        extraClass: 'tooltip-button',
        showURL: false
    });
    jQuery(".tipInput").tooltip({
        track: true,
        showBody: "#|#",
        extraClass: 'tooltip-input',
        top: -12
    });
}
function globalPrint() {

}
function globalPrint2() {
    window.print();
}
function ShowHideStartDatePanel(isPageLoad) {
    var pnlShowHideDate = jQuery('#' + pnlStartDate);
    var pnlShowHideFQHCYesDiv = jQuery('#' + divFQHCYes);
    var pnlShowHideFQHCNoDiv = jQuery('#' + divFQHCNo);
    if ($('#' + rdoFQHC + ' input:checked').val() == "True") {
        pnlShowHideDate.show();
        pnlShowHideFQHCNoDiv.hide();
        pnlShowHideFQHCYesDiv.show();
        //ShowFQHCPercent();
    }
    else if ($('#' + rdoFQHC + ' input:checked').val() == "False") {
        pnlShowHideDate.hide();
        pnlShowHideFQHCNoDiv.show();
        pnlShowHideFQHCYesDiv.hide();
    }
    else {
        pnlShowHideDate.hide();
        pnlShowHideFQHCNoDiv.show();
        pnlShowHideFQHCYesDiv.hide();
    }
    adjustFooter();
}
function ShowFQHCPercent(elem, flag) {
    Page_ClientValidate("FQHCStartDate");
    if (!($("#" + rfvTotalPatient).is(":visible")
        || $("#" + rfvAllLocationPatientEncounter).is(":visible")
        || $("#" + cvComparePatientEncounters).is(":visible"))) {//Checking if any validation related to TPE's are visible.
        TPE = jQuery("#" + FQHCTotalPatientEncounter).val();
        AllLocationTPE = jQuery("#" + FQHCAllLocationTPE).val();
        if (TPE > 0 && AllLocationTPE > 0) {
            Percent = (TPE / AllLocationTPE) * 100;
            jQuery("#" + FQHClblSubTotal).text(parseFloat(TPE).toFixed(0));
            jQuery("#" + FQHClblTotal).text(parseFloat(AllLocationTPE).toFixed(0));
            jQuery("#" + FQHClblPercent).text(parseFloat(Percent).toFixed(2) + "%");
        }
        else if (TPE == 0 && AllLocationTPE > 0) {
            Percent = (TPE / AllLocationTPE) * 100;
            jQuery("#" + FQHClblSubTotal).text(parseFloat(TPE).toFixed(0));
            jQuery("#" + FQHClblTotal).text(parseFloat(AllLocationTPE).toFixed(0));
            jQuery("#" + FQHClblPercent).text(parseFloat(Percent).toFixed(2) + "%");
        }
    }
    else {
        var NotApplicableCheck = jQuery("#" + lblNotApplicable).text();
        var NotApplicableZeroCheck = jQuery("#" + lblNotApplicableZero).text();
        jQuery("#" + FQHClblSubTotal).text(NotApplicableZeroCheck);
        jQuery("#" + FQHClblTotal).text(NotApplicableZeroCheck);
        jQuery("#" + FQHClblPercent).text(NotApplicableCheck);
    }
}

function CalculateFQHCPercent() {
    if (Page_ClientValidate("FQHCStartDate")) {
        TPE = jQuery("#" + FQHCTotalPatientEncounter).val();
        AllLocationTPE = jQuery("#" + FQHCAllLocationTPE).val();
        PercentValue = jQuery("#" + FQHCPercentValue).val();

        Percent = (TPE / AllLocationTPE) * 100;
        //Percent = parseFloat(Percent).toFixed(2);
        //PercentValue=parseFloat(PercentValue).toFixed(2)
        PercentCheckPass = false;
        CheckProceedFQHCPass = false;
        if (Percent <= PercentValue) {
            if (confirm(jQuery("#" + FQHCPercentConfirm).val())) {
                PercentCheckPass = true;
            }
        }
        else {
            PercentCheckPass = true;
        }
        if (PercentCheckPass) {
            CheckProceedFQHCPass = CheckProceedFQHC();
            if (CheckProceedFQHCPass == null || typeof (CheckProceedFQHCPass) == 'undefined') {
                CheckProceedFQHCPass = true;
            }
        }
        if (CheckProceedFQHCPass && PercentCheckPass) {
            return true;
        }
        else {
            return false;
        }
    }
}

function OpenPrintReportPopUpWindow() {

    var varAttestationID = jQuery.trim(document.getElementById(AttestationID).value);
    var varIsHospitalBased = jQuery.trim(document.getElementById(IsHospitalBased).value);
    var leftPos = (screen.width / 2) - 350;
    var topPos = (screen.height / 2) - 240;
    window.open("/Attestation/PrintReport.aspx?AttestationID=" + varAttestationID + "&t=" + varIsHospitalBased, 'AttestationSummary', "toolbar=no, left=" + leftPos + ", top=" + topPos + ", location=no, addressbar=no,directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, titlebar=no, navigationtoolbar=no, copyhistory=no, width=830, height=500");
    //    return false;
}

function OpenPrintReportPopUpWindowPDF() {

    var varAttestationID = jQuery.trim(document.getElementById(AttestationID).value);
    var varIsHospitalBased = jQuery.trim(document.getElementById(IsHospitalBased).value);
    var leftPos = (screen.width / 2) - 350;
    var topPos = (screen.height / 2) - 240;
    window.open("/Attestation/PrintReportPDF.aspx?AttestationID=" + varAttestationID + "&t=" + varIsHospitalBased, 'AttestationSummary', "toolbar=no, left=" + leftPos + ", top=" + topPos + ", location=no, addressbar=no,directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, titlebar=no, navigationtoolbar=no, copyhistory=no, width=830, height=500");
    //    return false;
}

function OpenPrintReportPopUpWindowAttestation(AttestationID, IsHospitalBased) {

    var varAttestationID = AttestationID;
    var varIsHospitalBased = IsHospitalBased;
    var leftPos = (screen.width / 2) - 350;
    var topPos = (screen.height / 2) - 240;
    var win = window.open("/Attestation/PrintReportPDF.aspx?AttestationID=" + varAttestationID + "&t=" + varIsHospitalBased, 'AttestationSummary', "toolbar=no, left=" + leftPos + ", top=" + topPos + ", location=no, addressbar=no,directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, titlebar=no, navigationtoolbar=no, copyhistory=no, width=830, height=500");
    var result;
    var delay = 8000;

    setTimeout(function () {
        result = checkPopupBlocked(win);

        if (result) {
            alert("The print window was blocked by your browser's pop-up blocker.  Please disable your pop-up blocker and try again!");
        }
    }, delay);


}

function checkPopupBlocked(popupWindow) {
    var result = true;
    try {
        if (typeof popupWindow == 'undefined') {
            // Safari with popup blocker... leaves the popup window handle undefined 
            result = true;
        }
        else if (popupWindow && popupWindow.closed) {
            // This happens if the user opens and closes the client window... 
            // Confusing because the handle is still available, but it's in a "closed" state. 
            // We're not saying that the window is not being blocked, we're just saying 
            // that the window has been closed before the test could be run. 
            result = false;
        }
        else if (popupWindow && popupWindow.innerHeight != 0) {
            // This is the actual test. The client window should be fine. 
            result = false;
        }
        else {
            // Else we'll assume the window is not OK 
            result = true;
        }

    } catch (err) {
        // could not get win 
    }

    return result;
}

function CheckProceedFQHC() {

    if (IsSubmitted) {
        enableIt();
        return true;
    } else if (!isPageDirty && isPageComplete) {
        return true;
    }
    else {
        PercentCheckComplete = jQuery("#" + FQHCPercentCheckComplete).val();
        if ($('#' + rdoFQHC + ' input:checked').val() == "True") {//FQHC
            if (Page_ClientValidate("FQHCStartDate")) {
                //calculatring percentage so that if % is <=50% and user has changed answer form No to Yes
                // then no popup is to be shown
                TPE = jQuery("#" + FQHCTotalPatientEncounter).val();
                AllLocationTPE = jQuery("#" + FQHCAllLocationTPE).val();
                PercentValue = jQuery("#" + FQHCPercentValue).val();

                Percent = (TPE / AllLocationTPE) * 100;

                if (IsFQHCAnswer == "False" && Percent > PercentValue) {//EDIT
                    return confirm(jQuery("#" + FQHCConfirm).val());
                }
                if (Percent <= PercentValue) {
                    var yes = confirm('Practicing predominantly requires more than 50% of all encounters to be at FQHC/SBHC/RHC.  By proceeding with 50% or less FQHC/SBHC/RHC encounters, you will be asked to meet Medicaid patient, rather than needy individual patient, volume threshold.\nDo you wish to proceed?')
                    if (yes) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

            }
        } else if ($('#' + rdoFQHC + ' input:checked').val() == "False") {//Hospital
            if (IsFQHCAnswer == "True" && PercentCheckComplete != "Yes") {//EDIT
                return confirm(jQuery("#" + FQHCConfirm).val());
            }
            else {
                return Page_ClientValidate("Question");
            }
        } else {
            return Page_ClientValidate("Question");
        }
    }
}
function CheckProceedFQHCPrev() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else {
        PercentCheckComplete = jQuery("#" + FQHCPercentCheckComplete).val();
        if ($('#' + rdoFQHC + ' input:checked').val() == "True") {//FQHC
            if (Page_ClientValidate("FQHCStartDate")) {
                //calculatring percentage so that if % is <=50% and user has changed answer form No to Yes
                // then no popup is to be shown
                TPE = jQuery("#" + FQHCTotalPatientEncounter).val();
                AllLocationTPE = jQuery("#" + FQHCAllLocationTPE).val();
                PercentValue = jQuery("#" + FQHCPercentValue).val();

                Percent = (TPE / AllLocationTPE) * 100;

                if (IsFQHCAnswer == "False" && Percent > PercentValue) {//EDIT
                    return false;
                }
                if (Percent <= PercentValue) {
                    return false;
                }
                return true;
            } else {
                return false;
            }
        } else if ($('#' + rdoFQHC + ' input:checked').val() == "False") {//Hospital
            if (IsFQHCAnswer == "True" && PercentCheckComplete != "Yes") {//EDIT
                return false; //return false;
            }
            else {
                return Page_ClientValidate("Question");
            }
        } else {
            return Page_ClientValidate("Question");
        }
    }
}
function SetBreadcrumb() {
    if ($('#' + rdoFQHC + ' input:checked').val() == "False") {//FQHC
        jQuery(".heading-inner, .breadcrums span:last > a").text(litHospitalHeading);
    } else {
        jQuery(".heading-inner, .breadcrums span:last > a").text(litFQHCHeading);
    }
}
function CheckProceed(message, option, yesMessage, noMessage) {
    if (option)
        return confirm(message + " " + (option == "True" ? yesMessage : noMessage) + " related data would be lost, if any.");
    else
        return confirm(message);
}
var adjustFooter = function () {
    jQuery(".right-main").height('');
    var mainContentHeight = jQuery(".right-main").outerHeight() + jQuery(".right-border-bot").outerHeight();
    if (mainContentHeight > jQuery(".side-menu").outerHeight() + 11)
        jQuery(".tab-main").height(mainContentHeight - (parseInt(jQuery(".tab-main").css('padding-top')) + 4));
    else {
        jQuery(".tab-main").height(jQuery(".side-menu").outerHeight() + 11);
        jQuery(".right-main").height(jQuery(".side-menu").outerHeight() + 11);
    }
};
/*Global Function | END*/
/*Local Function | START*/
//function checkdd() {
//    if ($("#" + chkApprove + ":checked").length == 1) {//Checked
//        $("#" + chkAttest).removeAttr('disabled').parent().removeAttr('disabled').removeClass("checkboxDisabled");
//    } else {
//        $("#" + chkAttest).attr("checked", false);
//        $("#" + chkAttest).attr('disabled', 'disabled').parent().attr('disabled', 'disabled').addClass("checkboxDisabled");
//        $("#" + btnNext).attr('disabled', 'disabled').addClass("buttonDisabled").removeClass("button");
//    }
//    return false;
//}

function checkddd() {
    if ($("#" + chkAttest + ":checked").length == 1) {//Checked
        $("#" + btnNext).attr('disabled', '').removeClass("buttonDisabled").addClass("button");
        //$("#" + SaveAndReturnLater).unbind("click");
    } else {//Unchecked
        $("#" + btnNext).attr('disabled', 'disabled').addClass("buttonDisabled").removeClass("button");
        //commented by snjeev Kumar
        //$("#" + SaveAndReturnLater).click(function() { return false; });
    }
    return false;
}

function checkboxchecked() {
    if ($("#" + chkAdopt + ":checked").length == 1 || $("#" + chkImplement + ":checked").length == 1 || $("#" + chkUpgrade + ":checked").length == 1) {//Checked
        $("#" + btnNext).attr('disabled', '').removeClass("buttonDisabled").addClass("button");
        //$("#" + SaveAndReturnLater).unbind("click");
    } else {//Unchecked
        $("#" + btnNext).attr('disabled', 'disabled').addClass("buttonDisabled").removeClass("button");
        //$("#" + SaveAndReturnLater).click(function() { return false; });
    }
    return false;
}

function disableButton() {
    $("#" + btnNext).attr('disabled', 'disabled').addClass("buttonDisabled").removeClass("button");
}



/*Local Function | END*/
/**
* http://www.openjs.com/scripts/events/keyboard_shortcuts/
* Version : 2.01.B
* By Binny V A
* License : BSD
*/
shortcut = {
    'all_shortcuts': {}, //All the shortcuts are stored in this array
    'add': function (shortcut_combination, callback, opt) {
        //Provide a set of default options
        var default_options = {
            'type': 'keydown',
            'propagate': false,
            'disable_in_input': true,
            'target': document,
            'keycode': false,
            'control': document
        };
        if (!opt) opt = default_options;
        else {
            for (var dfo in default_options) {
                if (typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
            }
        }

        var ele = opt.target;
        if (typeof opt.target == 'string') ele = document.getElementById(opt.target);
        var ths = this;
        shortcut_combination = shortcut_combination.toLowerCase();
        var isCtrlDown = false;
        //The function to be called at keyup
        var funcUp = function (e) {
            if (isCtrlDown) isCtrlDown = false;
        };
        //The function to be called at keydown
        var func = function (e) {
            e = e || window.event;
            e.control = opt.control;
            if (opt['disable_in_input']) { //Don't enable shortcut keys in Input, Textarea fields
                var element;
                if (e.target) element = e.target;
                else if (e.srcElement) element = e.srcElement;
                if (element.nodeType == 3) element = element.parentNode;

                if (element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
            }

            //Find Which key is pressed
            if (e.keyCode) code = e.keyCode;
            else if (e.which) code = e.which;
            var character = String.fromCharCode(code).toLowerCase();

            if (code == 188) character = ","; //If the user presses , when the type is onkeydown
            if (code == 190) character = "."; //If the user presses , when the type is onkeydown

            var keys = shortcut_combination.split("+");
            //Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
            var kp = 0;

            //Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
            var shift_nums = {
                "`": "~",
                "1": "!",
                "2": "@",
                "3": "#",
                "4": "$",
                "5": "%",
                "6": "^",
                "7": "&",
                "8": "*",
                "9": "(",
                "0": ")",
                "-": "_",
                "=": "+",
                ";": ":",
                "'": "\"",
                ",": "<",
                ".": ">",
                "/": "?",
                "\\": "|"
            };
            //Special Keys - and their codes
            var special_keys = {
                'esc': 27,
                'escape': 27,
                'tab': 9,
                'space': 32,
                'return': 13,
                'enter': 13,
                'backspace': 8,

                'scrolllock': 145,
                'scroll_lock': 145,
                'scroll': 145,
                'capslock': 20,
                'caps_lock': 20,
                'caps': 20,
                'numlock': 144,
                'num_lock': 144,
                'num': 144,

                'pause': 19,
                'break': 19,

                'insert': 45,
                'home': 36,
                'delete': 46,
                'end': 35,

                'pageup': 33,
                'page_up': 33,
                'pu': 33,

                'pagedown': 34,
                'page_down': 34,
                'pd': 34,

                'left': 37,
                'up': 38,
                'right': 39,
                'down': 40,

                'f1': 112,
                'f2': 113,
                'f3': 114,
                'f4': 115,
                'f5': 116,
                'f6': 117,
                'f7': 118,
                'f8': 119,
                'f9': 120,
                'f10': 121,
                'f11': 122,
                'f12': 123
            };

            var modifiers = {
                shift: { wanted: false, pressed: false },
                ctrl: { wanted: false, pressed: false },
                alt: { wanted: false, pressed: false },
                meta: { wanted: false, pressed: false }	//Meta is Mac specific
            };

            if (e.ctrlKey) modifiers.ctrl.pressed = true;
            if (e.shiftKey) modifiers.shift.pressed = true;
            if (e.altKey) modifiers.alt.pressed = true;
            if (e.metaKey) modifiers.meta.pressed = true;

            for (var i = 0; k = keys[i], i < keys.length; i++) {
                //Modifiers
                if (k == 'ctrl' || k == 'control') {
                    kp++;
                    modifiers.ctrl.wanted = true;

                } else if (k == 'shift') {
                    kp++;
                    modifiers.shift.wanted = true;

                } else if (k == 'alt') {
                    kp++;
                    modifiers.alt.wanted = true;
                } else if (k == 'meta') {
                    kp++;
                    modifiers.meta.wanted = true;
                } else if (k.length > 1) { //If it is a special key
                    if (special_keys[k] == code) kp++;

                } else if (opt['keycode']) {
                    if (opt['keycode'] == code) kp++;

                } else { //The special keys did not match
                    if (character == k) kp++;
                    else {
                        if (shift_nums[character] && e.shiftKey) { //Stupid Shift key bug created by using lowercase
                            character = shift_nums[character];
                            if (character == k) kp++;
                        }
                    }
                }
            }

            if (kp == keys.length &&
						modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
						modifiers.shift.pressed == modifiers.shift.wanted &&
						modifiers.alt.pressed == modifiers.alt.wanted &&
						modifiers.meta.pressed == modifiers.meta.wanted) {
                callback(e);

                if (!opt['propagate']) { //Stop the event
                    //e.cancelBubble is supported by IE - this will kill the bubbling process.
                    e.cancelBubble = true;
                    e.returnValue = false;

                    //e.stopPropagation works in Firefox.
                    if (e.stopPropagation) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    return false;
                }
            } else {
                if (!isCtrlDown && modifiers.ctrl.wanted && modifiers.ctrl.pressed) {
                    isCtrlDown = true;
                    jQuery(e.control).find("span.keyInActive").toggleClass("keyActive");
                }
            }
        };

        this.all_shortcuts[shortcut_combination] = {
            'callback': func,
            'target': ele,
            'event': opt['type']
        };
        //Attach the function with the event
        if (ele.addEventListener) ele.addEventListener(opt['type'], func, false);
        else if (ele.attachEvent) ele.attachEvent('on' + opt['type'], func);
        else ele['on' + opt['type']] = func;

        //Attach the function with the event
        if (ele.addEventListener) ele.addEventListener('keyup', funcUp, false);
        else if (ele.attachEvent) ele.attachEvent('onkeyup', funcUp);
        else ele['onkeyup'] = funcUp;
    },

    //Remove the shortcut - just specify the shortcut and I will remove the binding
    'remove': function (shortcut_combination) {
        shortcut_combination = shortcut_combination.toLowerCase();
        var binding = this.all_shortcuts[shortcut_combination];
        delete (this.all_shortcuts[shortcut_combination]);
        if (!binding) return;
        var type = binding['event'];
        var ele = binding['target'];
        var callback = binding['callback'];

        if (ele.detachEvent) ele.detachEvent('on' + type, callback);
        else if (ele.removeEventListener) ele.removeEventListener(type, callback, false);
        else ele['on' + type] = false;
    }
};

function BindShortCut() {
    $.each(AttachShortcut, function (e) {
        var $this = jQuery(this);
        if (jQuery($this[2]).length)
            addShortcut($this[0], $this[1], $this[2]);
    });
}
function addShortcut(keyShortcut, action, control) {
    shortcut.add(keyShortcut, function (a) {
        switch (action.toUpperCase()) {
            case "CLICK":
                jQuery(a.control).click();
                break;
            case "HREF":
                window.location.href = jQuery(a.control).attr("href");
                break;
            case "HREF_BLANK":
                window.location.href = jQuery(a.control).attr("href");
                break;
        }
    }, {
        "control": control
    });
}

function CheckPatientVolumeChanges(message, messageCheckChanges, option, objTotalCount, objOption, objFirstEP, IsD16RequestSubmitted) {

    if (Page_ClientValidate("GroupMPN")) {
        if (objTotalCount != '0' && objFirstEP == "True") {
            if (option != objOption && objOption != "") {
                if (IsD16RequestSubmitted == "True") {
                    alert(message)
                    return false;
                }
                return confirm(messageCheckChanges.replace("-1", objTotalCount));
            }
        }
    }

}
function GroupChangeAnswer() {

    if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Individual") {
        jQuery("#" + pnlIndvidual).show();
        jQuery("#" + pnlGroupPractice).hide();
        if (jQuery("#" + rdoAffiliation + " input:checked").val() == "Yes") {
            jQuery("#" + pnlDescriptionPage).show();
            jQuery("#" + pnlStateQuestions).show();
            if (jQuery("#" + rdoStateData + " input:checked").val() == "Yes") {
                jQuery("#" + pnlStateData).show();
            }
            else {
                jQuery("#" + pnlStateData).hide();
            }
        }
        else {
            jQuery("#" + pnlDescriptionPage).hide();
            jQuery("#" + pnlStateData).hide();
            jQuery("#" + pnlStateQuestions).hide();
            jQuery("#" + pnlStateData).hide();
        }
    }
    else if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Group Practice") {
        jQuery("#" + pnlIndvidual).hide();
        jQuery("#" + pnlGroupPractice).show();
        jQuery("#" + pnlDescriptionPage).hide();
        jQuery("#" + pnlStateQuestions).hide();
        jQuery("#" + pnlStateData).hide();
    }
    else {
        jQuery("#" + pnlIndvidual).hide();
        jQuery("#" + pnlGroupPractice).hide();
        jQuery("#" + pnlDescriptionPage).hide();
        jQuery("#" + pnlStateQuestions).hide();
        jQuery("#" + pnlStateData).hide();
    }
    //    if (SelectedControl == "rdoPatientVolume") {
    //        ClearGroupDates();
    //    }
    adjustFooter();
}

function CheckForChanges() {
    var arrmessage = jQuery("#" + hidMessage).val();
    var answers = jQuery("#" + hdnQuestions).val();
    //var SelectedControl = event.data.a;
    var message = ReturnGroupMessage(arrmessage, answers);
    if (message != "") {
        if (confirm(message)) {
            ResetGroupValues(answers);
            return true;
        }
        else {
            return false;
        }
    }

}
function CheckForChangesPrev() {
    var arrmessage = jQuery("#" + hidMessage).val();
    var answers = jQuery("#" + hdnQuestions).val();
    //var SelectedControl = event.data.a;
    var message = ReturnGroupMessagePrev(arrmessage, answers);
    return (message == "");
}

function CheckProceedGroup(event) {
    var arrmessage = jQuery("#" + hidMessage).val();
    var answers = jQuery("#" + hdnQuestions).val();
    //    var SelectedControl = event.data.a;    
    GroupChangeAnswer();
}
function ReturnGroupMessage(message, answers) {
    var arrmessage = message.split("|");
    var arrAnswers = answers.split("|");


    if (arrAnswers[4] != jQuery("#" + rdoPatientVolume + " input:checked").val() && arrAnswers[4] != "") {
        message = arrmessage[1];
    }
    else if (arrAnswers[5] != jQuery("#" + rdoAffiliation + " input:checked").val() && arrAnswers[5] != "") {
        message = arrmessage[1];
    }
    else if (arrAnswers[6] != jQuery("#" + rdoStateData + " input:checked").val() && arrAnswers[6] != "") {
        message = arrmessage[1];
    }
    else {
        message = "";
    }
    return message;
}
function ReturnGroupMessagePrev(message, answers) {
    var arrmessage = message.split("|");
    var arrAnswers = answers.split("|");
    if (arrAnswers[4] != jQuery("#" + rdoPatientVolume + " input:checked").val() && arrAnswers[4] != "") {
        message = arrmessage[1];
    }
    else if (arrAnswers[5] != jQuery("#" + rdoAffiliation + " input:checked").val() && arrAnswers[5] != "") {
        message = arrmessage[1];
    }
    else if (arrAnswers[6] != jQuery("#" + rdoStateData + " input:checked").val() && arrAnswers[6] != "") {
        message = arrmessage[1];
    }
    else {
        message = "";
    }
    return message;
}
function ResetGroupValues(answers) {
    var arrAnswers = answers.split("|");
    arrAnswers[4] = "";
    arrAnswers[5] = "";
    arrAnswers[6] = "";
    SetGroupDataControlsValues(arrAnswers);
}
function SetGroupDataControlsValues(arrAnswers) {
    var finalString = "";
    var i = 0;
    for (i = 0; i <= arrAnswers.length - 1; i++) {
        finalString = finalString + arrAnswers[i] + "|";
    }
    finalString = finalString.substring(0, finalString.length - 1);
    jQuery("#" + hdnQuestions).val(finalString);
}

function ClearGroupDates() {
    document.getElementById(txtStartDate).value = "";
    document.getElementById(txtEndDate).value = "";
}

function CancelAllChecks(variable) {

    if (variable == "rdoPatientVolume") {
        if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Individual") {
            $('#' + rdoPatientVolume).find("input[value='Practice Group']").attr("checked", "checked");
        }
        else {
            $('#' + rdoPatientVolume).find("input[value='Individual']").attr("checked", "checked");
        }
    }
    else if (variable == "rdoAffiliation") {
        if (jQuery("#" + rdoAffiliation + " input:checked").val() == "Yes") {
            $('#' + rdoAffiliation).find("input[value='No']").attr("checked", "checked");

        }
        else {
            $('#' + rdoAffiliation).find("input[value='Yes']").attr("checked", "checked");

        }
    }
    else if (variable == "rdoStateData") {
        if (jQuery("#" + rdoStateData + " input:checked").val() == "Yes") {
            $('#' + rdoStateData).find("input[value='No']").attr("checked", "checked");

        }
        else {
            $('#' + rdoStateData).find("input[value='Yes']").attr("checked", "checked");

        }
    }
}
function showhideGroupDetails() {

    if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Individual") {
        jQuery("#" + pnlIndvidual).show();
        jQuery("#" + pnlGroupPractice).hide();
        if (jQuery("#" + rdoAffiliation + " input:checked").val() == "Yes") {
            jQuery("#" + pnlDescriptionPage).show();
            jQuery("#" + pnlStateQuestions).show();
            if (jQuery("#" + rdoStateData + " input:checked").val() == "Yes") {
                jQuery("#" + pnlStateData).show();
            }
            else {
                jQuery("#" + pnlStateData).hide();
            }
        }
        else {
            jQuery("#" + pnlDescriptionPage).hide();
            jQuery("#" + pnlStateData).hide();
            jQuery("#" + pnlStateQuestions).hide();
            jQuery("#" + pnlStateData).hide();
        }
    }
    else {
        jQuery("#" + pnlIndvidual).hide();
        jQuery("#" + pnlGroupPractice).show();
        jQuery("#" + pnlDescriptionPage).hide();
        jQuery("#" + pnlStateQuestions).hide();
        jQuery("#" + pnlStateData).hide();
    }
    adjustFooter();
}
function TextToEmpty(e, ControlID) {
    var strToCompare = "";
    if (ControlID == '0') {
        strToCompare = document.getElementById(hidMPNMessage).value
    }
    else {
        strToCompare = document.getElementById(hidGroupNPIMessage).value
    }
    if (e.value == strToCompare) {
        e.value = "";
    }
}

function InsertEmptyData(e, ControlID) {
    if (e.value == "") {
        if (ControlID == '0') {
            e.value = document.getElementById(hidMPNMessage).value;
        }
        else {
            e.value = document.getElementById(hidGroupNPIMessage).value;
        }
    }
}
function ConfirmonDelete(controlValue) {
    var message;
    message = jQuery("#" + hidMessage).val().split("|")[1];
    if (confirm(message)) {
        return true;
    }
    return false;
}
function ValidateGroupPractice() {
    //        $('html, body').animate(
    //        {
    //        scrollTop: $("#header").offset().top
    //        }, 0);

    //    $('html, body').animate(
    //        {scrollTop: $("#header").offset().top}, 0);
    //alert("Testing");


    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else {
        if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Individual") {
            if (jQuery("#" + rdoAffiliation + " input:checked").val() == "Yes") {
                if (jQuery("#" + rdoStateData + " input:checked").val() == "Yes") {
                    if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question") && Page_ClientValidate("OutOfState") && Page_ClientValidate("ValidInividual") && Page_ClientValidate("ValidState")) {
                        return CheckForChanges();
                    }
                    else {
                        return false;
                    }
                }
                else if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question") && Page_ClientValidate("OutOfState") && Page_ClientValidate("ValidInividual")) {
                    return CheckForChanges();
                }
                else {
                    return false;
                }
            }
            else if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question")) {
                return CheckForChanges();
            }
            else {
                return false;
            }
        }
        else {
            if (Page_ClientValidate("StartDate") && Page_ClientValidate("PatientVolume") && Page_ClientValidate("ValidGroupPractice")) {
                return CheckForChanges();
            }
            else {
                return false;
            }
        }
    }
}
function ValidateGroupPracticePrev() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else {
        if (jQuery("#" + rdoPatientVolume + " input:checked").val() == "Individual") {
            if (jQuery("#" + rdoAffiliation + " input:checked").val() == "Yes") {
                if (jQuery("#" + rdoStateData + " input:checked").val() == "Yes") {
                    if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question") && Page_ClientValidate("OutOfState") && Page_ClientValidate("ValidInividual") && Page_ClientValidate("ValidState")) {
                        return CheckForChangesPrev();
                    }
                    else {
                        return false;
                    }
                }
                else if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question") && Page_ClientValidate("OutOfState") && Page_ClientValidate("ValidInividual")) {
                    return CheckForChangesPrev();
                }
                else {
                    return false;
                }
            }
            else if (Page_ClientValidate("StartDate") && Page_ClientValidate("Question")) {
                return CheckForChangesPrev();
            }
            else {
                return false;
            }
        } else {
            if (Page_ClientValidate("StartDate") && Page_ClientValidate("PatientVolume") && Page_ClientValidate("ValidGroupPractice")) {
                return CheckForChangesPrev();
            }
            else {
                return false;
            }
        }
    }
}
function calcHospitalTotals() {
    var TotalMedicaidInpatientDischarges = 0;
    $("input[type=text][id*=txtMedicaidInpatientDischarges]").each(function () {
        if (Number($(this).val()) >= 0) {
            TotalMedicaidInpatientDischarges += Number($(this).val());
        }
    });
    $("span[id*=lblTotalMedicaidInpatientDischarges]:first").text(TotalMedicaidInpatientDischarges);

    var TotalMedicaidEDVisits = 0;
    $("input[type=text][id*=txtMedicaidEDVisits]").each(function () {
        if (Number($(this).val()) >= 0) {
            TotalMedicaidEDVisits += Number($(this).val());
        }
    });
    $("span[id*=lblTotalMedicaidEDVisits]:first").text(TotalMedicaidEDVisits);

    var TotalInpatientDischarges = 0;
    $("input[type=text][id*=txtInpatientDischarges]").each(function () {
        if (Number($(this).val()) >= 0) {
            TotalInpatientDischarges += Number($(this).val());
        }
    });
    $("span[id*=lblTotalInpatientDischarges]:first").text(TotalInpatientDischarges);

    var TotalEDVisits = 0;
    $("input[type=text][id*=txtEDVisits]").each(function () {
        if (Number($(this).val()) >= 0) {
            TotalEDVisits += Number($(this).val());
        }
    });
    $("span[id*=lblTotalEDVisits]:first").text(TotalEDVisits);

    var SubTotal
    var Total
    if (!isNaN(TotalMedicaidInpatientDischarges) && !isNaN(TotalMedicaidEDVisits))
        SubTotal = TotalMedicaidInpatientDischarges + TotalMedicaidEDVisits;
    if (!isNaN(TotalInpatientDischarges) && !isNaN(TotalEDVisits))
        Total = TotalInpatientDischarges + TotalEDVisits;

    if ((SubTotal > 0 && Total > 0) || (SubTotal == 0 && Total >= 0)) {
        var Percent = Math.floor((SubTotal / Total) * 10000) / 100;
        if (parseInt(Percent) > 0 && parseInt(Percent) <= 100) {
            $("#" + lblPercent).text(parseFloat(Percent).toFixed(2) + "%");
        }
        else {
            $("#" + lblPercent).text("N/A");
        }
        $("#" + lblSubTotal).text(parseFloat(SubTotal).toFixed(0));
        $("#" + lblTotal).text(parseFloat(Total).toFixed(0));
    }
}

function calculateCostDetailTotals(tableName) {
    var totalXIXDays = 0;
    var totalInpatientDays = 0;
    var fieldAmt = 0;
    var invalidEntry = false;

    $("#" + tableName + " tr").find("input.fieldCalc").each(function () {
        fieldAmt = removeLeadingZeros($("#" + this.id).val());
        if (jQuery.trim(fieldAmt).length == 0) {
            fieldAmt = 0;
        }
        if (isInteger(fieldAmt)) {
            if (tableName == "tblTitleXIXDays") {
                totalXIXDays += parseInt(fieldAmt);
            } else if (tableName == "tblTotalInpatientDays") {
                totalInpatientDays += parseInt(fieldAmt);
            }
        }
        else {
            invalidEntry = true;
        }
    });

    //    if (Number(totalXIXDays) > Number(MaxIntValue) && tableName == "tblTitleXIXDays") {
    //        invalidEntry = true;
    //    } else if (Number(totalInpatientDays) > Number(MaxIntValue) && tableName == "tblTotalInpatientDays") {
    //        invalidEntry = true;
    //    }

    // if there is an invalid entry (non numeric entry) set the total to N/A
    if (invalidEntry) {
        if (tableName == "tblTitleXIXDays") {
            $("#" + tCRDTX_TCDD).text("N/A");
            $("#" + hCRDTX_TCDD).val("N/A");
        } else if (tableName == "tblTotalInpatientDays") {
            $("#" + tCRDTI_TCDD).text("N/A");
            $("#" + hCRDTI_TCDD).val("N/A");
        }
    }
        // otherwise, update the totals
    else {
        if (tableName == "tblTitleXIXDays") {
            $("#" + tCRDTX_TCDD).text(totalXIXDays);
            $("#" + hCRDTX_TCDD).val(totalXIXDays);
        } else if (tableName == "tblTotalInpatientDays") {
            $("#" + tCRDTI_TCDD).text(totalInpatientDays);
            $("#" + hCRDTI_TCDD).val(totalInpatientDays);
        }
    }
}

function ValidatePatientValue() {
    if (Page_ClientValidate("EPValidate")) {

        var _varMECPE = parseInt(jQuery('#' + GTMECPE).html());
        var _varGTPE = parseInt(jQuery('#' + GTPE).html());
        var _varPercent = 0;
        var _PatientValue = parseInt(jQuery('#' + PatientValue).val());

        if (_varMECPE == 0 && _varGTPE == 0)
            _varPercent = 0;
        else
            _varPercent = parseFloat((_varMECPE / _varGTPE) * 100).toFixed(2);

        if (_varPercent < _PatientValue)
            return confirm(jQuery('#' + PatientMessage).val());
        else
            return true;
    }
    return false;
}

function DisableBackspace() {
    $(document).keydown(function (e) {
        var element = e.target.nodeName.toLowerCase();
        if (element == 'input' && $(e.target).attr("readonly") == true) {
            if (e.keyCode == 8) {
                return false;
            }
        } else if (element != 'input' && element != 'textarea') {
            if (e.keyCode == 8) {
                return false;
            }
        }
    });
}
function checkONCLength(source, args) {
    var txtbox = document.getElementById(txtONC);
    var count = txtbox.value;

    if (count.length != 15) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
var globalSubmit = false;
function AIUConfirmBox(elem) {
    if (IsSubmitted) {
        enableIt();
        return true;
    } else {
        if (globalSubmit == false && $("#" + txtONC).length > 0) {
            if (Page_ClientValidate('Save')) {
                var txtONCVal = jQuery("#" + txtONC).val();
                var DecryprAttestationid = jQuery("#" + txtONC).val();
                var chkAdopt = jQuery("#" + chkAdopt).is(":checked");
                var chkImplement = jQuery("#" + chkImplement).is(":checked")
                var chkUpgrade = jQuery("#" + chkUpgrade).is(":checked")
                var questionid = jQuery("#" + hfQuestionID).val();
                var DecryprAttestationid = jQuery("#" + hfAttestationId).val();
                $('#dvAjaxbar').dialog("open");
                jQuery.ajax({
                    url: '/ExtraPage.aspx?KEYWORD=AIU_ONC&ONC=' + txtONCVal + '&AttestationID=' + DecryprAttestationid + "&chkAdopt=" + chkAdopt + "&chkImplement=" + chkImplement + "&chkUpgrade=" + chkUpgrade + "&questionid=" + questionid,
                    cache: false,
                    async: true,
                    success: function (data, a, b) {
                        jDialogClose('#dvAjaxbar');
                        if (data == "0" && !confirm("EHR Certification Number is not correct. Please try again or click OK to move ahead with the invalid EHR Certification Number.\nDo you wish to proceed?")) {
                            globalSubmit = false;
                        } else {
                            globalSubmit = true;
                            $(elem).click();
                        }
                    },
                    error: function (a, b, c) {
                        jDialogClose('#dvAjaxbar');
                        alert("There was an error in last transaction.");
                        globalSubmit = false;
                    }
                });
                return false;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}
function AIUConfirmBoxPrev() {
    if (IsSubmitted) {
        enableIt();
        return true;
    }
    else {
        if ($("#" + txtONC).length > 0) {
            return Page_ClientValidate('Save');
        } else {
            return true;
        }
    }
}


/*Global | START*/

function jDialogClose(dialogElement) {
    $(dialogElement).dialog("close");
    return false;
}
/*Global | END*/
function IsWithdrawAttestation() {
    return confirm("Withdrawing your attestation allows you to edit your data. You will be able to submit your attestation after editing the data. Do you wish to proceed?");
}

function CanCancelAttestation() {
    return confirm("Cancelling your attestation clears your data. Do you wish to proceed?");
}
function setFQHCDatepickerWidth() {
    var startDate = jQuery("#" + txtStartDate);
    var parent = startDate.parent();
    var width = parseInt(parent.width()) - (parseInt(startDate.css("border-left-width")) + parseInt(startDate.css("border-right-width")) + startDate.next().outerWidth(true) + 3);
    startDate.width(width);
}
/*KEYS ALREADY DEFINED - Please keep them in ALPHABETIC order
-------------------------------------
KEY                 => PAGE
-------------------------------------
Ctrl+Shift+F        =>  TopMenu.ascx
Ctrl+Shift+P        =>  TopMenu.ascx
Ctrl+Shift+R        =>  TopMenu.ascx
Ctrl+Shift+U        =>  TopMenu.ascx
--------------------------------------
*/

window.onload = OnLoadClearCookies;

//window.alert = function (message) {
//    $(document.createElement('div'))
//    //.attr({ title: 'Alert', 'class': 'alert' })
//    .html(message)
//    .dialog({
//        title: 'Alert',
//        buttons: { OK: function () { $(this).dialog('close'); } },
//        close: function () { $(this).remove(); },
//        draggable: true,
//        modal: true,
//        resizable: false,
//        minWidth: 100,
//        minHeight: 50
//    });
//};




//window.onbeforeunload = PreUnloadJavaScript;//commented by Nagarjuna Battina On 02/22/2012 because getting error

function OnLoadClearCookies() {
    var parts = document.cookie.split(';');
    var pLen = document.cookie.split(';').length;
    for (var i = 0; i < pLen; i++) {
        var ck = parts[i].split("=");
        if (ck[0].match("winID__") != null) {

            if ((typeof (Authenticate) != "undefined" && Authenticate) ||
                (typeof (IsAuthenticated) != "undefined" && IsAuthenticated))//persistent cookie
                setCookie(ck[0], 0, parseInt(sessionTimeout));
            else//Session cookie
                setCookie(ck[0], 0);
        }
    }
}
function PreUnloadJavaScript() {
    var idLabel = document.getElementById(uxWinID);

    var cookieName = "winID__" + idLabel.innerHTML;
    //var allCookies = get_cookies_array(); 
    var winIDCookie = getCookie(cookieName);

    if (winIDCookie != "") {
        setCookie(cookieName, 1);
    }
    var parts = document.cookie.split(';');
    var pLen = document.cookie.split(';').length;

    for (var i = 0; i < pLen; i++) {
        var ck = parts[i].split("=");

        var itemName = ck[0].replace(" ", "");
        if (itemName == cookieName) { /// Do you magic here
            setCookie(cookieName, 1);
        }
    }
}
function setCookie(c_name, value, expireMinutes) {
    //debugger;
    var str = c_name + "=" + escape(value) + ";path=/;";
    if (typeof (expireMinutes) != "undefined") {
        var today = new Date();
        today.setTime(today.getTime());

        var exdate = new Date();
        exdate.setDate(new Date());
        exdate.setTime(new Date(today.getTime() + (expireMinutes * 60 * 1000)).getTime());
        str += "expires=" + exdate.toUTCString();
    }
    document.cookie = str;
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function ShowCostReportHistoryIncompleteWarning() {
    OnLoadClearCookies();
    if (confirm("The span of your cost report history information must equal 4 full years. Do you wish to proceed?") == true) {
        document.getElementById(hidBypass4YrRule).value = "true";
        document.getElementById(btnNext).click();
    }
    else {
        document.getElementById(hidBypass4YrRule).value = "false";
    }
}
function CompareInPatientGridValues(source, args) {
    var row = $("#" + source.id).parent().parent().find('*');
    var medicaidInpatientDischarges;
    var inpatientDischarges;

    // find both text box controls
    row.each(function (index) {
        if (this.id) {
            if (this.id.indexOf("txtMedicaidInpatientDischarges") != -1) {
                this.value = removeLeadingZeros(this.value);
                medicaidInpatientDischarges = this.value;
            }
            else if (this.id.indexOf("txtInpatientDischarges") != -1) {
                this.value = removeLeadingZeros(this.value);
                inpatientDischarges = this.value;
            }
        }
    });

    if ((medicaidInpatientDischarges) && (inpatientDischarges)) {
        if (parseInt(medicaidInpatientDischarges) > parseInt(inpatientDischarges)) {
            args.IsValid = false;
            source.innerHTML = "<br />Total Medicaid Acute Care Inpatient Discharges must be less than Total Acute Care Inpatient Discharges."
        }
    }
}

function CompareEDVisitsGridValues(source, args) {
    var row = $("#" + source.id).parent().parent().find('*');
    var medicaidInpatientDischarges;
    var inpatientDischarges;

    // find both text box controls
    row.each(function (index) {
        if (this.id) {
            if (this.id.indexOf("txtMedicaidEDVisits") != -1) {
                this.value = removeLeadingZeros(this.value);
                medicaidEDVisits = this.value;
            }
            else if (this.id.indexOf("txtEDVisits") != -1) {
                this.value = removeLeadingZeros(this.value);
                edVisits = this.value;
            }
        }
    });

    if ((medicaidEDVisits) && (edVisits)) {
        if (parseInt(medicaidEDVisits) > parseInt(edVisits)) {
            args.IsValid = false;
            source.innerHTML = "<br />Total Medicaid ED Visits must be less than Total ED Visits."
        }
    }
}
function SetRequiredPatientVolumeGrid(source, args) {

    var row = $("#" + source.id).parent().parent().find('*');
    var medicaidEDVisits;
    var edVisits;
    var medicaidInpatientDischarges;
    var inpatientDischarges;
    var ncMPN;
    var hospitalName;
    var isMandatoryMPN = false;
    var validatorControls = new Array();
    var arrayCounter = 0;

    // find both text box controls
    row.each(function (index) {
        if (this.id) {
            if (this.id.indexOf("txtNCMPN") != -1) {
                ncMPN = this.value;
            }
            else if (this.id.indexOf("txtHospitalName") != -1) {
                hospitalName = this.value;
            }
            else if (this.id.indexOf("txtMedicaidEDVisits") != -1) {
                medicaidEDVisits = this.value;
            }
            else if (this.id.indexOf("lblNCMPN") != -1) {
                isMandatoryMPN = true;
            }
            else if (this.id.indexOf("txtEDVisits") != -1) {
                edVisits = this.value;
            }
            else if (this.id.indexOf("txtMedicaidInpatientDischarges") != -1) {
                medicaidInpatientDischarges = this.value;
            }
            else if (this.id.indexOf("txtInpatientDischarges") != -1) {
                inpatientDischarges = this.value;
            }
        }
    });

    if (((medicaidEDVisits) || (edVisits) || (medicaidInpatientDischarges) || (inpatientDischarges))
                || (!(isMandatoryMPN) && ((ncMPN) || (hospitalName)))) {
        if (!(args.Value)) {
            args.IsValid = false;
            CompleteGrid = false;
        }
    }

    if ((medicaidEDVisits) && (edVisits) && (medicaidInpatientDischarges) && (inpatientDischarges)) {
        if (!(isMandatoryMPN) && (ncMPN) && (hospitalName)) {
            CompleteGrid = true;
        } else if (isMandatoryMPN) {
            CompleteGrid = true;
        } else {
            CompleteGrid = false;
        }
    }

    if (!args.Value && SaveCompletePage) {
        args.IsValid = false;
        CompleteGrid = false;
    }
}

function ValidatePageComplete() {
    SaveCompletePage = true;
    if (!isPageDirty && isPageComplete) {
        return true;
    } else {
        if (Page_ClientValidate()) {
            var percentage = $("#" + lblPercent).text();
            if (parseFloat(percentage) < 10 || percentage == "N/A") {
                var confirmation = confirm('The patient volume percentage doesn’t meet program requirements for an EHR incentive payment.\nDo you wish to proceed?')
                if (confirmation) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
}

function ValidateUniqueMPN(control, args) {

    $("input[type=text][id*=txtNCMPN]").each(function () {
        if ($(this).val() == args.Value && this.id != control.controltovalidate) {
            args.IsValid = false;
        }
    });
    $("span[id*=lblNCMPN]").each(function () {
        if ($(this).text() == args.Value && this.id != control.controltovalidate) {
            args.IsValid = false;
        }
    });


}

function validate_chars_keypress(vals, e) {

    var charCode = (e.charCode) ? e.charCode : e.keyCode;
    if (charCode == 8 || charCode == 9 || charCode == 13) {
        return true;
    }

    for (i = 0; i < vals.length; i++) {
        if (String.fromCharCode(charCode) == vals.charAt(i)) {
            return true;
        }
    }

    if (e.returnValue) {
        e.returnValue = false;
    }

    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

function removeLeadingZeros(s) {
    while (s.substr(0, 1) == '0' && s.length > 1) {
        s = s.substr(1);
    }
    return s;
}

function dateValidation(isField) {
    if (isField.value == "")
    { return; }
    var month = isField.value.split("/")[0];
    var day = isField.value.split("/")[1];
    var year = isField.value.split("/")[2];
    var dte = new Date(year, month - 1, day);
    var m = "";

    if ((typeof (year) == "undefined") || (day < 1 || day > 31) || (month < 1 || month > 12) && (year.length != 4)) {
        alert("Invalid Format: use 'mm/dd/yyyy'");
        //isField.value = "";
        isField.focus();
        return;
    }

    else {
        var dt = new Date(year, month - 1, day);
        var today = new Date();
        if ((dt.getDate() != day) || (dt.getMonth() != month - 1) || (dt.getFullYear() != year) || (dt > today)) {
            alert("Invalid Date");
            //isField.value = "";
            isField.focus();
            return;
        }
    }
    if (dte.toDateString() == "Invalid Date" || dte.toDateString() == "" || dte == "NaN") {
        //isField.value = "";
        isField.focus();
    }
    else {
        //        m = dte.getMonth() + 1;
        //        isField.value = m.toString() + "/" + dte.getDate().toString() + "/" + dte.getFullYear().toString();
        isField.value = (dte.getMonth() + 1 < 10 ? "0" + (dte.getMonth() + 1).toString() : (dte.getMonth() + 1).toString()) + "/" +
            (dte.getDate() < 10 ? "0" + dte.getDate().toString() : dte.getDate().toString()) + "/" +
            dte.getFullYear().toString();
    }
}

function ClearCostReportDetails() {
    if (($("#" + txtCRDTX_RPFD).val() != $("#" + hfCRDTX_RPFD).val() || $("#" + txtCRDTX_RPTD).val() != $("#" + hfCRDTX_RPTD).val())
        && ($("#" + hfCRDTX_RPFD).val().length > 0 && $("#" + hfCRDTX_RPTD).val().length > 0)) {

        var emptyField = true;
        $("#tblTitleXIXDays").find("input[type=text]").each(function () {
            if ($(this).val().length > 0)
                emptyField = false;
        });
        $("#tblTotalInpatientDays").find("input[type=text]").each(function () {
            if ($(this).val().length > 0)
                emptyField = false;
        });
        $("#tblTotalCharges").find("input[type=text]").each(function () {
            if ($(this).val().length > 0)
                emptyField = false;
        });

        if (!emptyField) {
            var clearPage = confirm("A cost report date has been changed.  If you proceed, all the values in the tables on this page will be cleared. Do you wish to proceed?");
            if (clearPage) {
                $("#tblTitleXIXDays").find("input[type=text]").each(function () {
                    $(this).val("");
                });
                calculateCostDetailTotals("tblTitleXIXDays");
                $("#tblTotalInpatientDays").find("input[type=text]").each(function () {
                    $(this).val("");
                });
                calculateCostDetailTotals("tblTotalInpatientDays");
                $("#tblTotalCharges").find("input[type=text]").each(function () {
                    $(this).val("");
                });
                $("#" + hfCRDTX_RPFD).val($("#" + txtCRDTX_RPFD).val());
                $("#" + hfCRDTX_RPTD).val($("#" + txtCRDTX_RPTD).val());
            } else {
                $("#" + txtCRDTX_RPFD).val($("#" + hfCRDTX_RPFD).val());
                $("#" + txtCRDTX_RPTD).val($("#" + hfCRDTX_RPTD).val());
            }
        } else {
            $("#" + hfCRDTX_RPFD).val($("#" + txtCRDTX_RPFD).val());
            $("#" + hfCRDTX_RPTD).val($("#" + txtCRDTX_RPTD).val());
        }
    } else {
        $("#" + hfCRDTX_RPFD).val($("#" + txtCRDTX_RPFD).val());
        $("#" + hfCRDTX_RPTD).val($("#" + txtCRDTX_RPTD).val());
    }
}

function disableEnterKey() {
    if (event.keyCode == 13 || event.keyCode == 9) {
        event.keyCode = 9; //return the tab key
        event.cancelBubble = true;
    }
}
function compareCRDTotalsValidate(control, args) {

    args.IsValid = true;
    var showMsg = false;

    calculateCostDetailTotals("tblTotalInpatientDays");
    calculateCostDetailTotals("tblTitleXIXDays");

    if ($("#" + txtCRDTX_HAPS).val() != "" && $("#" + txtCRDTI_HAPS).val() != "") {
        if (Number($("#" + txtCRDTX_HAPS).val()) > Number($("#" + txtCRDTI_HAPS).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_HMO).val() != "" && $("#" + txtCRDTI_HMO).val() != "") {
        if (Number($("#" + txtCRDTX_HMO).val()) > Number($("#" + txtCRDTI_HMO).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_HMOP).val() != "" && $("#" + txtCRDTI_HMOP).val() != "") {
        if (Number($("#" + txtCRDTX_HMOP).val()) > Number($("#" + txtCRDTI_HMOP).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_HMOR).val() != "" && $("#" + txtCRDTI_HMOR).val() != "") {
        if (Number($("#" + txtCRDTX_HMOR).val()) > Number($("#" + txtCRDTI_HMOR).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_APSS).val() != "" && $("#" + txtCRDTI_APSS).val() != "") {
        if (Number($("#" + txtCRDTX_APSS).val()) > Number($("#" + txtCRDTI_APSS).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_APSN).val() != "" && $("#" + txtCRDTI_APSN).val() != "") {
        if (Number($("#" + txtCRDTX_APSN).val()) > Number($("#" + txtCRDTI_APSN).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_ICU).val() != "" && $("#" + txtCRDTI_ICU).val() != "") {
        if (Number($("#" + txtCRDTX_ICU).val()) > Number($("#" + txtCRDTI_ICU).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_CCU).val() != "" && $("#" + txtCRDTI_CCU).val() != "") {
        if (Number($("#" + txtCRDTX_CCU).val()) > Number($("#" + txtCRDTI_CCU).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_BICU).val() != "" && $("#" + txtCRDTI_BICU).val() != "") {
        if (Number($("#" + txtCRDTX_BICU).val()) > Number($("#" + txtCRDTI_BICU).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_SICU).val() != "" && $("#" + txtCRDTI_SICU).val() != "") {
        if (Number($("#" + txtCRDTX_SICU).val()) > Number($("#" + txtCRDTI_SICU).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_OSC).val() != "" && $("#" + txtCRDTI_OSC).val() != "") {
        if (Number($("#" + txtCRDTX_OSC).val()) > Number($("#" + txtCRDTI_OSC).val()))
            showMsg = true;
    }

    if ($("#" + txtCRDTX_NUR).val() != "" && $("#" + txtCRDTI_NUR).val() != "") {
        if (Number($("#" + txtCRDTX_NUR).val()) > Number($("#" + txtCRDTI_NUR).val()))
            showMsg = true;
    }

    if (showMsg) {
        $("#divDisplayWarning").show();
    } else {
        $("#divDisplayWarning").hide();
    }

    return args.IsValid;
}
//This is example written By Nagarjuna Battina on 02/20/2012
$(document).ready(function () {
    $(function () {
        $('#user_session_logout').click(function () {
            $('#divLoginDetails').show();
            $('#divDisplayDetails').hide();
            return false;
        });
        $('#user_session_submit').click(function () {
            $('#divLoginDetails').hide();
            $('#divDisplayDetails').show();
            return false;
        });

        //DatePicker control code
        $("#txtLicenseEffectiveDate").datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button'
        });
        $("#txtLicenseExpirationDate").datepicker({ buttonImage: '../images/Calendar.png', buttonImageOnly: true, showOn: 'button' });

        $("#txtLicenseEffectiveDate1").datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button'
        });
        $("#txtLicenseExpirationDate1").datepicker({ buttonImage: '../images/Calendar.png', buttonImageOnly: true, showOn: 'button' });

        $("#txtLicenseEffectiveDate2").datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button'
        });
        $("#txtLicenseExpirationDate2").datepicker({ buttonImage: '../images/Calendar.png', buttonImageOnly: true, showOn: 'button' });

        $("#txtLicenseEffectiveDate3").datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button'
        });
        $("#txtLicenseExpirationDate3").datepicker({ buttonImage: '../images/Calendar.png', buttonImageOnly: true, showOn: 'button' });
        //License Page
        $('input[id$=txtLicenseKeyEffectiveDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/1900",
            maxDate: "12/31/2050",
            yearRange: "1900:2050",
            showOn: 'button',
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        //License Page
        $('input[id$=txtLicenseKeyExpirationDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/1900",
            maxDate: "12/31/2050",
            yearRange: "1900:2050",
            showOn: 'button',
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
            }
        });
        //Practice Predominantly Page
        $('input[id$=txtStartDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            showOn: 'button',
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });

        //Patient Volumes Page
        $('input[id$=txtEndDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            showOn: 'button',
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
            }
        });

        //Cost Report Data Page
        $('input[id$=txtCostReportStartDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            showOn: 'button',
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
            }
        });

        $('input[id$=txtCostReportEndDate]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
            }
        });

        //Historical Cost Report Data Page
        $('input[id$=txtCostReportStartDate1]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            showOn: 'button',
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportStartDate2]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportStartDate3]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportStartDate4]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportEndDate1]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportEndDate2]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportEndDate3]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });
        $('input[id$=txtCostReportEndDate4]').datepicker({
            changeMonth: true, changeYear: true, buttonImage: '../images/Calendar.png',
            buttonImageOnly: true,
            showOn: 'button',
            minDate: "01/01/2000",
            maxDate: "12/31/2050",
            yearRange: "2000:2050",
            buttonText: "Click here to show calendar",
            onSelect: function () {
                // The "this" keyword refers to the input (in this case: #someinput)
                this.focus();
                //force datepicker pop-up to close
                $("#ui-datepicker-div").css('display', 'none');
            }
        });

        $("#user_session_submit").click(function () {
            if (txtUserName.val() == '') {
                showCallOut('ContactNumberTextId', "Please enter contact number");
            }
        });

    });
});
function showCallOut(element, errorMessage) {
    alert("callout");
    element = '#' + element;
    $(element).addClass('jt ui-state-error').attr('message', errorMessage);

    var firstErrorElement = $('.ui-state-error:first');
    var firstErrorElementTop = firstErrorElement.offset().top;

    $(element).attr('title', 'Required field')
        .attr('rel', 'div[id="ValidationMessageDiv"]')
        .cluetip({
            local: true, cursor: 'pointer',
            cluetipClass: 'jtip', width: '150', //sticky:'true',
            arrows: true, dropShadow: false, hoverIntent: false
        });
    firstErrorElement.focus();
}

function removeCallOut() {
    $('.ui-state-error').unbind('focus.cluetip');
    $('.ui-state-error').removeClass('jt ui-state-error').removeAttr('message')
        .removeAttr('rel').removeAttr('title');
}


function NumericTextboxControl(event) {
    // Allow: backspace, delete, tab, escape, and enter
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
        // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
        // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    else {
        // Ensure that it is a number and stop the keypress
        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    }
}

function FormatToMMDDYY(date) {
    var mm = date.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;

    return mm + '/' + date.getDate() + '/' + date.getFullYear();
}

function ValidatePageRequiredFieldControls() {
    var isvalid = true;
    $(".mu_errormessage").remove();
    $("input[type=text]").each(function (index) {
        if ($(this).is(':visible') && $.trim($(this).val()) == '') {
            isvalid = false;
        }
    });
    if (isvalid == false) {
        return false;
    }
}

// Bug 1965 - client side validation
// code validates if control is valid and fires the validator message
function ValidatePageControls() {
    var i;

    var pageValid = Page_ClientValidate('');

    if (!pageValid) {
        for (i = 0; i < Page_Validators.length; i++) {

            //Verify if validator control is valid false
            if (!Page_Validators[i].isvalid) {
                pageValid = false;
            }
            // To display text message Sets validator control visible property 
            ValidatorUpdateDisplay(Page_Validators[i]);
        }
    }
    return pageValid;
}

function HideValidationSummary() {
    if (typeof (Page_ValidationSummaries) != "undefined") { //hide the validation summaries
        for (sums = 0; sums < Page_ValidationSummaries.length; sums++) {
            summary = Page_ValidationSummaries[sums];
            summary.style.display = "none";
        }
    }

}

function ShowTableRow(contentName, tableName) {
    var trRow = $("tr[Content_Name='" + contentName + "']", $("#" + tableName));
    if (trRow != null) {
        trRow.show();
    }
}
function HideTableRow(contentName, tableName) {
    $("tr[Content_Name='" + contentName + "']", $("#" + tableName)).hide();
    ClearControls(contentName, tableName);
}

function ClearControls(contentName, tableName) {
    var trRow = $("tr[Content_Name='" + contentName + "']", $("#" + tableName));
    $("input[type=text]", trRow).val('');
    $("input[type=radio]", trRow).removeAttr('checked');
}

function EnableValidatorCustom(elementName, enable)
{
    var valName = document.getElementById(elementName);
    valName.enabled = enable;
    valName.IsValid = true;
    ValidatorUpdateDisplay(valName);

}

// Added by Bryan Hampton 06/30/2014 to fix Bugzilla 877
// code to make Next button activate when Enter button pressed
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        $('input[id$=btnNext]').click();
    }
});