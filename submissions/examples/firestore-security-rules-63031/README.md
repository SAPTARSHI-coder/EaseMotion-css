# Firestore Security Rules #63031

1. **What does this do?**
   It provides explicitly defined Firestore security rules to protect financial data collections.

2. **How is it used?**
   Use the `ease-firestore-rules` class on a container (though primarily this submission delivers the following `firestore.rules` configuration block):

   ```javascript
   rules_version = '2';

   service cloud.firestore {
     match /databases/{database}/documents {
       // Default deny
       match /{document=**} {
         allow read, write: if false;
       }

       // Owner-based access for financial and sensitive collections
       match /transactions/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /trends/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /bills/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /cashflow/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /currency/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /reports/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /chat_conversations/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /chat_messages/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /portfolios/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /portfolioHoldings/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /portfolioTransactions/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /anomalies/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /forecasts/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       match /health_scores/{document} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
     }
   }
   ```

3. **Why is it useful?**
   It enforces owner-based access checks to prevent unauthorized access to sensitive financial records, securing collections such as `transactions`, `portfolios`, and `reports`.
