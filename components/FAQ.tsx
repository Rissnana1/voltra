"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Which countries do you currently ship to?",
    a: "Kenya, Uganda, Tanzania, Rwanda, Nigeria, Ghana, Ethiopia, Zambia and Malawi, with more markets opening every quarter. Delivery windows are shown at checkout before you pay.",
  },
  {
    q: "How does the repair warranty work?",
    a: "Every repair comes with a 90-day warranty covering the part and the labour. If the same issue returns, bring it back and we fix it again at no extra cost.",
  },
  {
    q: "What payment methods do you accept?",
    a: "M-Pesa and other mobile money options, debit and credit cards, and direct bank transfer for business orders. Prices are shown in your local currency at checkout.",
  },
  {
    q: "Can I trade in an old device?",
    a: "Yes — bring in phones, laptops or appliances for grading, and the credit is applied instantly toward a new purchase or a repair.",
  },
  {
    q: "Do you support bulk or business orders?",
    a: "Yes — the Business plan includes volume pricing, a dedicated account manager, and on-site installation for offices, shops and institutions ordering in bulk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <span className="eyebrow">
            <span className="dot" /> Questions
          </span>
          <h2 style={{ marginTop: 16 }}>Good to know before you order</h2>
        </Reveal>

        <Reveal className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="plus" />
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
