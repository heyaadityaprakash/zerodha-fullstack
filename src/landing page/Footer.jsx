import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <footer>
      <div className="container  mt-5">
        <div className="row">
          <div className="col">
            <img src="logo.svg" alt="" style={{marginBottom:"10%", marginTop:"2%"}} />
            <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="col">
            <h4>Company</h4>
            <a href="">About</a> <br />
            <a href="">Products</a> <br />
            <a href="">Pricing</a> <br />
            <a href="">Referral programme</a> <br />
            <a href="">Careers</a> <br />
            <a href="">Zerodha.tech</a> <br />
            <a href="">Press & media</a> <br />
            <a href="">Zerodha Cares (CSR)</a> <br />
          </div>
          <div className="col">
            <h4>Support</h4>
            <a href="">Contact us</a> <br />
            <a href="">Support portal</a> <br />
            <a href="">Z-Connect blog</a> <br />
            <a href="">List of charges</a> <br />
            <a href="">Downloads & resources</a> <br />
            <a href="">Videos</a> <br />
            <a href="">Market overview</a> <br />
            <a href="">How to file a complaint?</a> <br />
            <a href="">Status of your complaints</a> <br />
          </div>
          <div className="col">
            <h4>Account</h4>
            <a href="">Open an account</a> <br />
            <a href="">Fund transfer</a> <br />
          </div>
        </div>
        <div className="text-muted mt-5" style={{ fontSize: "75%" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a href="">complaints@zerodha.com</a>, for DP related to{" "}
            <a href="">dp@zerodha.com</a> . Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <a href="">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <a href="">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services,
            <a href="">please create a ticket here</a>.
          </p>
        </div>
        <div className="footer-links">
           <p><a href="">NSE</a></p>
           <p><a href="">BSE</a></p>
           <p><a href="">Terms & Conditions</a></p>
           <p><a href="">Privacy & Policy</a></p>
           <p><a href="">Disclosure</a></p>
           <p><a href="">For investor's attention</a></p>
           <p><a href="">Investor charter</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
