module.exports.update = {
  "id": "evt_1CcecMBrSjgsps2DMFZw5Tyx",
  "object": "event",
  "api_version": "2018-02-28",
  "created": 1528918014,
  "data": {
    "object": {
      "id": "ch_1CcdmsBrSjgsps2DNZiZAyvG",
      "object": "charge",
      "amount": 2000,
      "amount_refunded": 0,
      "application": null,
      "application_fee": null,
      "balance_transaction": "txn_1CcdmtBrSjgsps2DZ8fgy0l3",
      "captured": true,
      "created": 1528914822,
      "currency": "usd",
      "customer": "cus_CyvwcNX1GNZYpi",
      "description": null,
      "destination": null,
      "dispute": null,
      "failure_code": null,
      "failure_message": null,
      "fraud_details": {},
      "invoice": null,
      "livemode": true,
      "metadata": {
        "order_id": "5"
      },
      "on_behalf_of": null,
      "order": null,
      "outcome": {
        "network_status": "approved_by_network",
        "reason": null,
        "risk_level": "normal",
        "seller_message": "Payment complete.",
        "type": "authorized"
      },
      "paid": true,
      "receipt_email": "alexanmtz@gmail.com",
      "receipt_number": "1493-4227",
      "refunded": false,
      "refunds": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges/ch_1CcdmsBrSjgsps2DNZiZAyvG/refunds"
      },
      "review": null,
      "shipping": null,
      "source": {
        "id": "card_1CcdmoBrSjgsps2Dw7RRQDwp",
        "object": "card",
        "address_city": null,
        "address_country": null,
        "address_line1": null,
        "address_line1_check": null,
        "address_line2": null,
        "address_state": null,
        "address_zip": null,
        "address_zip_check": null,
        "brand": "MasterCard",
        "country": "BR",
        "customer": "cus_CyvwcNX1GNZYpi",
        "cvc_check": "pass",
        "dynamic_last4": null,
        "exp_month": 1,
        "exp_year": 2026,
        "fingerprint": "tzay8tdiaGOR9jgB",
        "funding": "credit",
        "last4": "3670",
        "metadata": {},
        "name": "Alexandre Magno",
        "tokenization_method": null
      },
      "source_transfer": null,
      "statement_descriptor": null,
      "status": "succeeded",
      "transfer_group": "task_23"
    },
    "previous_attributes": {
      "receipt_email": null,
      "receipt_number": null
    }
  },
  "livemode": true,
  "pending_webhooks": 1,
  "request": {
    "id": "req_7JDHTJnTPulDSK",
    "idempotency_key": null
  },
  "type": "charge.updated"
}
