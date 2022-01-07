import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-10 mb-10"  style={{ paddingTop: "35px"}}>
      <h1 className="text-center py-10 md:text-5xl text-3xl font-bold text-blue-900 font-myFont">Frequently Asked Questions...?</h1>
        <Accordion defaultActiveKey="0" className="w-11/12 mx-auto">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="font-myFont">RTGS Related?</Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q1. What is RTGS System?</p>
                <p><b>Ans.</b>The acronym 'RTGS' stands for Real Time Gross Settlement, which can be defined as the continuous (real-time) settlement of funds transfer individually on an order by order basis (without netting). 'Real Time' means the processing of instructions at the time they are received rather than at some later time; 'Gross Settlement' means the settlement of funds transfer instructions occurs individually (on an instruction by instruction basis). Considering that the funds settlement takes place in the books of the Reserve Bank of India, the payments are final and irrevocable.</p>
                <p className="font-bold">Q2. How RTGS is different from National Electronics Funds Transfer System (NEFT)?</p>
                <p><b>Ans.</b>NEFT is an electronic fund transfer system that operates on a Deferred Net Settlement (DNS) basis which settles transactions in batches. In DNS, the settlement takes place with all transactions received till the particular cut-off time. These transactions are netted (payable and receivables) in NEFT whereas in RTGS the transactions are settled individually. For example, currently, NEFT operates in hourly batches. [There are twelve settlements from 8 am to 7 pm on week days and six settlements from 8 am to 1 pm on Saturdays.] Any transaction initiated after a designated settlement time would have to wait till the next designated settlement time Contrary to this, in the RTGS transactions are processed continuously throughout the RTGS business hours.</p>
                <p className="font-bold">Q3. Is there any minimum / maximum amount stipulation for RTGS transactions?</p>
                <p><b>Ans.</b>The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is ` 2 lakh. There is no upper ceiling for RTGS transactions.</p>
                <p className="font-bold">Q4. Would the remitting customer get back the money if it is not credited to the beneficiary's account? When?</p>
                <p><b>Ans.</b>Yes. Funds, received by a RTGS member for the credit to a beneficiary customer's account, will be returned to the originating RTGS member within one hour of the receipt of the payment at the PI of the recipient bank or before the end of the RTGS Business day, whichever is earlier, if it is not possible to credit the funds to the beneficiary customer's account for any reason e.g. account does not exist, account frozen, etc. Once the money is received back by the remitting bank, the original debit entry in the customer's account is reversed.</p>
                <p className="font-bold">Q5. What is the essential information that the remitting customer would have to furnish to a bank for the remittance to be effected?</p>
                <p><b>Ans.</b>The remitting customer has to furnish the following information to a bank for initiating a RTGS remittance:<br/>1. Amount to be remitted<br/> 2. Remitting customer's account number which is to be debited<br/> 3. Name of the beneficiary bank and branch<br/> 4. The IFSC Number of the receiving branch<br/> 5. Name of the beneficiary customer<br/> 6. Account number of the beneficiary customer<br/> 7. Sender to receiver information, if any</p>
                <p className="font-bold">Q6. How would one know the IFSC number of the receiving branch?</p>
                <p><b>Ans.</b>The beneficiary customer can obtain the IFSC code from his bank branch. The IFSC code is also available on the cheque leaf. The list of IFSCs is also available on the RBI website ( https://rbidocs.rbi.org.in/rdocs/RTGS/DOCs/RTGEB0112.xls). This code number and bank branch details can be communicated by the beneficiary to the remitting customer.</p>

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="font-myFont">NEFT Related?</Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q.1. What is NEFT?</p>
                <p><b>Ans.</b>National Electronic Funds Transfer (NEFT) is a nation-wide payment system facilitating one-to-one funds transfer. Under this Scheme, individuals, firms and corporates can electronically transfer funds from any bank branch to any individual, firm or corporate having an account with any other bank branch in the country participating in the Scheme.</p>
                <p className="font-bold">Q.2. Who can transfer funds using NEFT?</p>
                <p><b>Ans.</b>Individuals, firms or corporates maintaining accounts with a bank branch can transfer funds using NEFT.</p>
                <p className="font-bold">Q.3. Who can receive funds through the NEFT system?</p>
                <p><b>Ans.</b>Individuals, firms or corporates maintaining accounts with a bank branch can receive funds through the NEFT system. It is, therefore, necessary for the beneficiary to have an account with the NEFT enabled destination bank branch in the country.</p>
                <p className="font-bold">Q.4. Is there any limit on the amount that could be transferred using NEFT?</p>
                <p><b>Ans.</b>No. There is no limit - either minimum or maximum - on the amount of funds that could be transferred using NEFT.</p>
                <p className="font-bold">Q.5. What is IFSC?</p>
                <p><b>Ans.</b>IFSC or Indian Financial System Code is an alpha-numeric code that uniquely identifies a bank-branch participating in the NEFT system. This is an 11 digit code with the first 4 alpha characters representing the bank, and the last 6 characters representing the branch. The 5th character is 0 (zero). IFSC is used by the NEFT system to identify the originating / destination banks / branches and also to route the messages appropriately to the concerned banks / branches.</p>
                <p className="font-bold">Q.6. Can a transaction be originated to draw (receive) funds from another account?</p>
                <p><b>Ans.</b>No. NEFT is a credit-push system i.e., transactions can be originated only to transfer / remit funds to a beneficiary.</p>
                <p className="font-bold">Q.7. What are the pre-requisites for originating a NEFT transaction?</p>
                <p><b>Ans.</b>Following are the pre-requisites for putting through a funds transfer transaction using NEFT -<br/>1. Originating and destination bank branches should be part of the NEFT network.<br/>2. Beneficiary details such as beneficiary name, account number and account type, name and IFSC of the beneficiary bank branch should be available with the remitter<br/>3. For net banking customers, some banks provide the facility to automatically pop-up the IFSC once name of the destination bank and branch is highlighted / chosen / indicated / keyed in.</p>
                <p className="font-bold">Q.8. What are the benefits of using NEFT?</p>
                <p><b>Ans.</b>NEFT offers many advantages over the other modes of funds transfer:<br/>1. The remitter need not send the physical cheque or Demand Draft to the beneficiary.<br/>2. The beneficiary need not visit his / her bank for depositing the paper instruments.<br/>3. The beneficiary need not be apprehensive of loss / theft of physical instruments or the likelihood of fraudulent encashment thereof.<br/>4. Credit confirmation of the remittances sent by SMS or email.<br/>5. Near real time transfer of the funds to the beneficiary account in a secure manner.<br/>6. Cost Effective</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="font-myFont">RTS Related?</Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q.1. What is Cheque Truncation?</p>
                <p>Truncation is the process of stopping the flow of the physical cheque issued by a drawer at some point by the presenting bank en-route to the drawee bank branch. In its place an electronic image of the cheque is transmitted to the drawee branch through the clearing house, along with relevant information like data on the MICR band, date of presentation, presenting bank, etc. Cheque truncation thus obviates the need to move the physical instruments across branches, other than in exceptional circumstances for clearing purposes. This effectively eliminates the associated cost of movement of the physical cheques, reduces the time required for their collection and brings elegance to the entire activity of cheque processing.</p>

                <p className="font-bold">Q.2. Why Cheque Truncation in India?</p>
                <p>As explained above, Cheque Truncation speeds up the process of collection of cheques resulting in better service to customers, reduces the scope for clearing-related frauds or loss of instruments in transit, lowers the cost of collection of cheques, and removes reconciliation-related and logistics-related problems, thus benefitting the system as a whole. With the other major products being offered in the form of RTGS and NEFT, the Reserve Bank has created the capability to enable inter-bank and customer payments online and in near-real time. However, as cheques are still the prominent modes of payments in the country. Reserve Bank of India has therefore decided to focus on improving the efficiency of the cheque clearing cycle, offering Cheque Truncation System (CTS) as an alternative. As highlighted earlier, CTS is a more secure system vis-a-vis the exchange of physical documents.</p>
                <p>In addition to operational efficiency, CTS offers several benefits to banks and customers, including human resource rationalisation, cost effectiveness, business process re-engineering, better service, adoption of latest technology, etc. CTS, thus, has emerged as an important efficiency enhancement initiative undertaken by Reserve Bank in the Payments Systems area.</p>

                <p className="font-bold">Q.3. What is the new approach to CTS implementation in the country?</p>
                <p>The new approach envisioned as part of the national roll-out is the grid-based approach. Under this approach the entire cheque volume in the country cleared across numerous MICR Cheque Processing locations will be consolidated into the three grids as mentioned in (3) above.</p>
                <p>Each grid will provide processing and clearing services to all the banks under its jurisdiction, Banks, branches and customers based at small / remote locations falling under the jurisdiction of a grid would be benefitted, irrespective of whether there exists at present a formal arrangement for cheque clearing or otherwise.</p>

                <p className="font-bold">Q.4. Is it possible to briefly explain the entire process flow in CTS?</p>
                <p>Yes. In CTS, the presenting bank (or its branch) captures the data (on the MICR band) and the images of a cheque using their Capture System (comprising of a scanner, core banking or other application) which is internal to them, and have to meet the specifications and standards prescribed for data and images.</p>
                <p>To ensure security, safety and non-repudiation of data / images, end-to-end Public Key Infrastructure (PKI) has been implemented in CTS. As part of the requirement, the collecting bank (presenting bank) sends the data and captured images duly signed and encrypted to the central processing location (Clearing House) for onward transmission to the paying bank (destination or drawee bank). For the purpose of participation the presenting and drawee banks are provided with an interface / gateway called the Clearing House Interface (CHI) that enables them to connect and transmit data and images in a secure and safe manner to the Clearing House (CH).</p>
                <p>The Clearing House processes the data, arrives at the settlement figure and routes the images and requisite data to the drawee banks. This is called the presentation clearing. The drawee banks through their CHIs receive the images and data from the Clearing House for payment processing. The drawee CHIs also generates the return file for unpaid instruments, if any. The return file / data sent by the drawee banks are processed by the Clearing House in the return clearing session in the same way as presentation clearing and return data is provided to the presenting banks for processing. The clearing cycle is treated as complete once the presentation clearing and the associated return clearing sessions are successfully processed. The entire essence of CTS technology lies in the use of images of cheques (instead of the physical cheques) for payment processing.</p>

                <p className="font-bold">Q.5. What type of cheques can be presented for clearing through CTS?</p>
                <p>It is preferable to present cheques complying with CTS-2010 standards for clearing through CTS. Cheques presented as part of Speed Clearing are handled in CTS as well (for more details on Speed Clearing, the related FAQs may be referred to). Incidentally, given the fact that images of cheques (and not the physical cheques) alone need to move in CTS, it is possible for the removal of the restriction of geographical jurisdiction normally associated with the paper cheque clearing. For reaping this benefit, the concept of Grid-CTS clearing has been envisaged at three locations in the country (Chennai, Mumbai and New Delhi). Under the grid clearing, cheques drawn on centres included in the grid will be cleared as part of local clearing.</p>

                <p className="font-bold">Q.6. Will there be any change in the process for the customers?</p>
                <p>No. There is no change in the clearing process for customers. Customers continue to use cheques as at present, except to ensure the use of image-friendly-coloured-inks while writing the cheques. Of course, such of those customers, who are used to receiving the paid instruments (like government departments) would also receive the cheque images. Cheques with alterations in material fields (explained in detail later) are not allowed to be processed under the CTS environment.</p>
                
                <p className="font-bold">Q.7. What are the benefits of CTS to customers of banks?</p>
                <p>The benefits from CTS are as follows -<br/>1. Shorter clearing cycle<br/>2. Superior verification and reconciliation process<br/>3. No geographical restrictions as to jurisdiction<br/>4. Operational efficiency for banks and customers alike</p>
                
                <p className="font-bold">Q.8.. What is Cheque Standardization and what does CTS 2010 Standard mean?</p>
                <p>Standardization of cheque forms (leaves) in terms of size, MICR band, quality of paper, etc., was one of the key factors that enabled mechanisation of cheque processing. Over a period of time, banks have added a variety of patterns and design of cheque forms to aid segmentation, branding, identification, etc., as also incorporated therein a number of security features to reduce the incidence of cheque misuse, tampering, alterations, etc. Growing use of multi-city and payable-at-par cheques for handling of cheques at any branches of a bank, introduction of Cheque Truncation System (CTS), increasing popularity of Speed Clearing, etc., were a few aspects that led to prescription of certain common minimum security features in cheques printed, issued and handled by banks and customers uniformly across the banking industry. Accordingly, certain benchmarks towards achieving standardization of cheques issued by banks across the country have been prescribed like - quality of paper, watermark, bank's logo in invisible ink, void pantograph, etc., and standardization of field placements on cheques. In addition, certain desirable features have also been suggested to be implemented by banks based on their need and risk perception.</p>
                <p>The set of minimum security features would not only ensure uniformity across all cheque forms issued by banks in the country but also help presenting banks while scrutinising / recognising cheques of drawee banks in an image-based processing scenario. The homogeneity in security features is expected to act as a deterrent against cheque frauds, while the standardization of field placements on cheque forms would enable straight-through-processing by use of optical / image character recognition technology. The benchmark prescriptions are collectively known as <b>"CTS-2010 standard"</b>.</p>
                <p>All banks providing cheque facility to their customers have been advised to issue only 'CTS-2010' standard cheques. Cheques not complying with CTS-2010 standards will be cleared at less frequent intervals i.e. twice a week up to October 31, 2014 and weekly once from November 1, 2014 onwards.</p>

                <p className="font-bold">Q.9. What is the prescription relating to alterations / corrections on cheque forms?</p>
                <p>The prescription on prohibiting alterations / corrections on cheques has been introduced to curtail cheque frauds on account of alterations in the various fields of cheques and to give protection to customers as well as banks. No changes / corrections can be carried out on the cheques (other than for date validation purposes, if required). For any change in the payee's name, courtesy amount (amount in figures) or legal amount (amount in words), fresh cheque leaves should be used by customers. This would help banks in identifying and controlling fraudulent alterations. This prohibition is applicable to cheques cleared under the image based Cheque Truncation System (CTS) only and is effective from December 1, 2010. It is not applicable to cheques cleared under other clearing arrangements for the present.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="font-myFont">KYC Related?</Accordion.Header>
            <Accordion.Body>
              <p className="font-bold">Q.1. What is KYC?</p>
              <p>KYC is an acronym for "Know your Customer", a term used for customer identification process. It involves making reasonable efforts to determine true identity and beneficial ownership of accounts, source of funds, the nature of customer's business, reasonableness of operations in the account in relation to the customer's business, etc which in turn helps the banks to manage their risks prudently. The objective of the KYC guidelines is to prevent banks being used, intentionally or unintentionally by criminal elements for money laundering.</p>
              <p>KYC has two components - Identity and Address. While identity remains the same, the address may change and hence the banks are required to periodically update their records.</p>

              <p className="font-bold">Q.2. Once KYC requirements are complied with while opening the account, whether the bank can again ask for KYC compliance from me?</p>
              <p>Yes. To ensure that the latest details about the customer are available, banks have been advised to periodically update the customer identification data based upon the risk category of the customers.</p>
              <p>Banks create a customer profile based on details about the customer like social/financial status, nature of business activity, information about his clients' business and their location, the purpose and reason for opening the account, the expected origin of the funds to be used within the relationship and details of occupation/employment, sources of wealth or income, expected monthly remittance, expected monthly withdrawals etc. When the transactions in the account are observed not consistent with the profile, bank may ask for any additional details / documents as required. This is just to confirm that the account is not being used for any Money Laundering/Terrorist/Criminal activities.</p>

              <p className="font-bold">Q.3. What is the detailed list of required documents under KYC?</p>
              <p>To get the detailed list of the documents that the bank can ask, Click Here.</p>

              <p className="font-bold">Q.4. Can my wife who is not having any address proof in her name, open an account with the bank?</p>
              <p>Yes. In such cases where the utility bills required for address verification are not in the name of the person who wants to open an account ( close relatives, e.g. wife, son, daughter and daughter and parents etc. who live with their husband, father/mother and son, as the case may be) , an identity document and a utility bill of the relative with whom the prospective customer is living along with a declaration from the relative that the said person (prospective customer) wanting to open an account is a relative and is staying with him/her is acceptable. As supplementary evidence bank may ask for a letter received through post for further confirmation.</p>

              <p className="font-bold">Q.5. I am a daily wage earner without any document to satisfy the bank about identity and address. Can I open a bank account?</p>
              <p>A customer belonging to low income group who is not able to produce documents to satisfy the bank about his identity and address, can open bank account with an introduction from another account holder who has been subjected to full KYC procedure provided that the balance in all his accounts taken together is not expected to exceed Rupees Fifty Thousand (Rs. 50,000/-) and the total credit in all the accounts taken together is not expected to exceed Rupees One Lakh (Rs. 1,00,000/-) in a year. The introducer's account with the bank should be at least six months old and should show satisfactory transactions. Photograph of the customer who proposes to open the account and also his address needs to be certified by the introducer,
              <br/><b>or</b><br/>any other evidence as to the identity and address of the customer to the satisfaction of the bank.<br/><br/>If at any point of time, the balance in all his/her accounts with the bank (taken together) exceeds Rupees Fifty Thousand (Rs. 50,000/-) or total credit in the account exceeds Rupees One Lakh (Rs. 1,00,000/-) in a year, no further transactions will be permitted until the full KYC procedure is completed.<br/><br/>In order not to inconvenience the customer, the bank will notify the customer when the balance reaches Rupees Forty Thousand (Rs. 40,000/-) or the total credit in a year reaches Rupees Eighty thousand (Rs. 80,000/-) that appropriate documents for conducting the KYC must be submitted otherwise operations in the account will be stopped.</p>
              
              <p className="font-bold">Q.6. Whether a certificate from my employer is sufficient as identity as well as address proof for opening an account?</p>
              <p>Banks rely on such certification only from corporate and other entities of repute provided that they are aware of the competent authority designated by the concerned employer to issue such certificate. In addition, banks also require at least one of the valid documents indicated above viz. Passport, Driving Licence, PAN Card, Voter's Identity Card etc. or utility bills for KYC purposes for opening bank account of salaried employees of corporate and other entities.</p>

              <p className="font-bold">Q.7. Whether the information given by me to the bank under KYC is treated as confidential?</p>
              <p>Yes. The information collected from the customer for the purpose of opening of account is treated as confidential and details thereof are not divulged for cross selling or any other similar purposes.</p>

              <p className="font-bold">Q.8. If I refuse to give information on KYC asked for by the bank, what action the bank can take against me?</p>
              <p>Where the bank is unable to apply appropriate KYC measures due to non-furnishing of information and /or non-cooperation by the customer, the bank can consider closing the account or terminating the banking/business relationship after issuing due notice to the customer explaining the reasons for taking such a decision.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="font-myFont">Basic Savings Account(BSBDA)</Accordion.Header>
            <Accordion.Body>
              <p className="font-bold">Q.1. What is the definition of "Basic Savings Bank Deposit Account" (BSBDA)?</p>
              <p>All the existing 'No-frills' accounts opened pursuant to guidelines issued vide circular UBD.BPD.Cir.No.19/13.01.000/2005-06 dated November 24, 2005 and converted into BSBDA in compliance with the guidelines issued in circular UBD.BPD.Cir.No.5/13.01.000/2012-13 dated August 17, 2012 as well as fresh accounts opened under the said circular should be treated as BSBDA.</p>
              
              <p className="font-bold">Q.2. Whether the guidelines issued on 'no-frills' account with 'nil' or very low minimum balances will continue even after the introduction of 'Basic Savings Bank Deposit Account'?</p>
              <p>No. In supersession of instructions contained in circular UBD.BPD.Cir.No.19/13.01.000/2005-06 dated November 24, 2005 on No Frill accounts, banks have now been advised to offer a 'Basic Savings Bank Deposit Account' to all their customers vide UBD.BPD.Cir.No.5/13.01.000/2012-13 dated August 17, 2012 , which will offer minimum common facilities as stated therein. Banks are required to convert the existing 'no-frills' accounts' into 'Basic Savings Bank Deposit Accounts'.</p>

              <p className="font-bold">Q.3. Can an Individual have any number of 'Basic Savings Bank Deposit Account' in one bank?</p>
              <p>No. An individual is eligible to have only one 'Basic Savings Bank Deposit Account' in one bank.</p>

              <p className="font-bold">Q.4. Whether a 'Basic Savings Bank Deposit Account' holder can have any other savings bank account in that bank ?</p>
              <p>Holders of 'Basic Savings Bank Deposit Account' will not be eligible for opening any other savings bank account in that bank. If a customer has any other existing savings bank account in that bank, he / she will be required to close it within 30 days from the date of opening a 'Basic Savings Bank Deposit Account'.</p>

              <p className="font-bold">Q.5. Can an individual have other deposit accounts where one holds 'Basic Savings Bank Deposit Account'?</p>
              <p>Yes. One can have Term/Fixed Deposit, Recurring Deposit etc., accounts in the bank where one holds 'Basic Savings Bank Deposit Account'.</p>

              <p className="font-bold">Q.6. Whether the 'Basic Savings Bank Deposit Account' can be opened by only certain types of individuals like poor and weaker sections of the population?</p>
              <p>No. The 'Basic Savings Bank Deposit Account' should be considered as a normal banking service available to all customers, through branches.</p>

              <p className="font-bold">Q.7. Whether there are any restrictions like age, income, amount etc criteria for opening BSBDA by banks for individuals?</p>
              <p>No. Banks are advised not to impose restrictions like age and income criteria of the individual for opening BSBDA.</p>

              <p className="font-bold">Q.8. What are KYC norms applicable to BSBDA accounts? Are there any relaxations in KYC norms for BSBDAs?</p>
              <p>The 'Basic Savings Bank Deposit Account' would be subject to provisions of PML Act and Rules and RBI instructions on Know Your Customer (KYC) / Anti-Money Laundering (AML) for opening of bank accounts issued from time to time. BSBDA can also be opened with simplified KYC norms. However, if BSBDA is opened on the basis of Simplified KYC, the accounts would additionally be treated as "BSBDA-Small Account".</p>

              <p className="font-bold">Q.9. Can I have a 'Small Account' in ABC Bank as per the Government of India Notification. Can I have additionally a 'Basic Savings Bank Deposit Account'?</p>
              <p>No, the BSBDA customer cannot have any other savings bank account in the same bank. If 'Basic Savings Bank Deposit Account' is opened on the basis of simplified KYC norms, the account would additionally be treated as a 'Small Account'</p>

              <p className="font-bold">Q.10. What are the conditions stipulated for accounts which are additionally to be treated as 'BSBDA-Small Account'?</p>
              <p>As notified in Govt of India notification dated December 16, 2010, BSBDA-Small Accounts would be subject to the following conditions:</p>
              <p>i. Total credits in such accounts should not exceed one lakh rupees in a year. ii. Maximum balance in the account should not exceed fifty thousand rupees at any time iii. The total of debits by way of cash withdrawals and transfers will not exceed ten thousand rupees in a month iv. Remittances from abroad cannot be credited to Small Accounts without completing normal KYC formalities v. Small accounts are valid for a period of 12 months initially which may be extended by another 12 months if the person provides proof of having applied for an Officially Valid Document. vi. Small Accounts can only be opened at CBS linked branches of banks or at such branches where it is possible to manually monitor the fulfilment of the conditions.</p>

              <p className="font-bold">Q.11. What kinds of services are available free in the 'Basic Savings Bank Deposit Account'?</p>
              <p>The services available free in the 'Basic Savings Bank Deposit Account' will include deposit and withdrawal of cash; receipt / credit of money through electronic payment channels or by means of deposit / collection of cheques at bank branches as well as ATMs.</p>

              <p className="font-bold">Q.12. of any initial minimum deposit Is there requirement while opening a BSBDA as per the circular dated August 17, 2012?There is no requirement for any initial deposit for opening a BSBDA.</p>
              <p>There is no requirement for any initial deposit for opening a BSBDA.</p>

              <p className="font-bold">Q.13. Whether banks are free to offer more facilities than those prescribed for 'Basic Savings Bank Deposit Account'?</p>
              <p>Yes. However, the decision to allow services beyond the minimum prescribed has been left to the discretion of the banks who can either offer additional services free of charge or evolve requirements including pricing structure for additional value-added services on a reasonable and transparent basis, to be applied in a non-discriminatory manner with prior intimation to the customers. Banks are required to put in place a reasonable pricing structure for value added services or prescribe minimum balance requirements which should be displayed prominently and also informed to the customers at the time of account opening. Offering such additional facilities should be non - discretionary, non-discriminatory and transparent to all 'Basic Savings Bank Deposit Account' customers. However, such accounts enjoying additional facilities will not be treated as BSBDAs.</p>

              <p className="font-bold">Q.14. If BSBDA customers have more than 4 withdrawals and request for cheque book at additional cost, will it cease to be a BSBDA?</p>
              <p>Yes. Please refer to response to the Query No. 14. However, if the bank does not levy any additional charges and offers more facilities free than those prescribed under BDBDA a/cs without minimum balance then such a/cs can be classified as BSBDA.</p>

              <p className="font-bold">Q.15. Whether Passbooks are also to be offered free to BSBDA holders?</p>
              <p>Yes. BSBDA holders will be offered passbook facility free of charge.</p>

              <p className="font-bold">Q.16. If a customer opens a BSBDA but does not close his existing Savings Bank Account within 30 days, are banks then free to close such savings bank accounts?</p>
              <p>While opening the BSBDA customers' consent in writing be obtained that his existing non-BSBDA Savings Banks accounts will be closed after 30 days of opening BSBDA and banks are free to close such accounts after 30 days.</p>

              <p className="font-bold">Q.17. In certain accounts to which disbursements under MGNREGA are made weekly, the number of withdrawals may be more than four in a month of five weeks. In such cases, can banks permit five withdrawals?</p>
              <p>In BSBDA, banks are required to provide free of charge minimum four withdrawals, including through ATM and other mode. Beyond four withdrawals, it is left to discretion of the banks to either offer free or charge for additional withdrawal/s. However pricing structure may be put in place by banks on a reasonable, non-discretionary, non-discriminatory and transparent manner.</p>

              <p className="font-bold">Q.18. Whether the normal saving bank account can be converted into BSBDA at the request of customer?</p>
              <p>Yes. Such customers should give their consent in writing and they should be informed of the features and extent of services available in BSBDAs.</p>

            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="5">
            <Accordion.Header className="font-myFont">How to place a request for a new cheque book?</Accordion.Header>
            <Accordion.Body>
            You may place the reqeust through branch ,ATM , IVR,Netbanking, Mobile Banking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="font-myFont">Is there any charges applicable for personalized debit card?</Accordion.Header>
            <Accordion.Body>
            Refer Schedule of charges.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="font-myFont">How can I place a request for account statement?</Accordion.Header>
            <Accordion.Body>
            You may place the request by calling at contact center or by visiting the branch.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
