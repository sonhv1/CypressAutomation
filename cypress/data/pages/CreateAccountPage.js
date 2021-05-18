/// <reference types="Cypress" />
let CreateAccountPage = {
    page_items: {
        mr_checkbox: {
            selector: 'input[type="radio"]#id_gender1'
        },
        mrs_checkbox: {
            selector: '#id_gender2'
        },
        firstName_field: {
            selector: '#customer_firstname'
        },
        lastName_field: {
            selector: '#customer_lastname'
        },
        email_field: {
            selector: '#email'
        },
        password_field: {
            selector: '#passwd'
        },
        day_dropdown_list: {
            selector: '#days'
        },
        month_dropdown_list: {
            selector: '#months'
        },
        year_dropdown_list: {
            selector: '#years'
        },
        address_firstName_field: {
            selector: '.form-control#firstname'
        },
        address_lastName_field: {
            selector: '.form-control#lastname'
        },
        company_field: {
            selector: '#company'
        },
        address_field: {
            selector: '#address1'
        },
        address2_field: {
            selector: '#address2'
        },
        city_field: {
            selector: '#city'
        },
        state_dropdown_list: {
            selector: '#id_state'
        },
        zip_field: {
            selector: '#postcode'
        },
        country_dropdown_list: {
            selector: '#id_country'
        },
        other_info_field: {
            selector: '#other'
        },
        home_phone_field: {
            selector: '#phone'
        },
        mobile_phone_field: {
            selector: '#phone_mobile'
        },
        address_alias_field: {
            selector: '#alias'
        },
        register_btn: {
            selector: '#submitAccount'
        }
    }
}

module.exports = CreateAccountPage;