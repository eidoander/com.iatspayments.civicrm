/*
 * backend contribute search, individual
 *   
 */

/*jslint indent: 2 */
/*global CRM, ts */

cj(function ($) {
  'use strict';
  $('#crm-main-content-wrapper').crmSnippet().on('crmLoad', function(e, data) {
    var backofficeLinks = (typeof CRM.vars.iatspayments != 'undefined') ? CRM.vars.iatspayments.backofficeLinks : CRM.iatspayments.backofficeLinks;
    if (0 < backofficeLinks.length) {
      $.each(backofficeLinks, function(index, value) {
         $('form#Search .action-link a.button').last().after('<a style="color: #F88;" class="button" href="'+value.url+'">'+value.title+'</a>');
         $('form#Search #help').append('<div class="acheft-backend-link">Click <a href="'+value.url+'">'+value.title+'</a> to process a new ACH/EFT contribution or recurring contribution from this contact.</div>');
      });
    }
  });
});
