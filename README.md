SAAS CONTRACTS DASHBOARD

OVERVIEW
This is a React.js saas contracts dashboard with an animated login, contract table, and contract detail pages.  
It supports search, filtering, pagination, and interactive components for clauses, AI insights, and evidence.



FEATURES

1. LOGIN PAGE
   - Animated diagonal gradient background with particles.  
   - Hover shimmer effect on the login button.  
   - Validates password (test123) with inline error message.  
   - Smooth fade-in animation for the login form.

2. DASHBAORD PAGE
   - Displays all contracts with ID, Name, Parties, Expiry, Status, Risk Score.  
   - Search by contract name or parties.  
   - Filter by status (`Active`, `Expired`, `Renewal Due`) and risk (`Low`, `Medium`, `High`).  
   - Pagination shows 10 rows per page.  
   - Clicking a row navigates to contract detail page.

3. CONTRACT DETAIL PAGE
   - Metadata: title, parties, start & expiry, status, risk score.  
   - Clauses Section: Cards showing title, summary, confidence score.  
   - AI Insights Section: List of risks & recommendations with severity labels.  
   - Evidence Panel: Side drawer displaying snippets and relevance scores.



TECH STACK CHOICES

| Role       | Technology                        |
|------------|----------------------------------|
| Frontend   | React.js                         |
| Routing    | React Router v6                  |
| Styling    | TailwindCSS                      |
| State      | React useState & useEffect       |
| Animation  | Tailwind Animations + Custom CSS |


SETUP INSTRUCTIONS

1. Clone the repository

```bash
git clone https://github.com/Vaishnavi6699/Saas_contracts_dashboard
cd saas-dashboard

2. Install Dependencies

npm install

3.Run server

npm run dev

4.output

Navigated to local host(http://localhost:5173)




ASSUMPTIONS MADE

Password is fixed (test123) for demo purposes.

Contract data is mocked in the frontend.

Contract IDs are unique and visible in the table.

Evidence, clauses, and AI insights are displayed if present or else empty

Background animations are purely visual; no backend or real-time data streaming.
