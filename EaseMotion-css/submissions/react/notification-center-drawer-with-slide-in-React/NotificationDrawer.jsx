import React, { useState } from "react";

function NotificationDrawer() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    "New message received",
    "Your profile was updated",
    "Order has been shipped",
  ]);

  return (
    <div className="ease-fade-in">
      <button
        className="ease-hover-lift"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Notifications" : "Open Notifications"}
      </button>

      {open && (
        <div className="ease-slide-in">
          <h2>Notifications</h2>

          {notifications.length === 0 ? (
            <p>No notifications available.</p>
          ) : (
            notifications.map((notification, index) => (
              <div key={index}>
                <p>{notification}</p>

                <button
                  className="ease-hover-lift"
                  onClick={() =>
                    setNotifications(
                      notifications.filter((_, i) => i !== index)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {notifications.length > 0 && (
            <button
              className="ease-hover-lift"
              onClick={() => setNotifications([])}
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationDrawer;
