# Animated Chat/Messaging Interface

A modern **Chat Interface** built with **EaseMotion CSS**. Features directional message animations (left for received, right for sent), typing indicator with bouncing dots, online status pulse, contact sidebar, and a fully styled message input area.

## ✨ Features

- **💬 Directional Message Animations**: Received messages slide in from left (`ease-slide-in-left`), sent messages slide in from right (`ease-slide-in-right`)
- **⌨️ Typing Indicator**: Three bouncing dots animation showing active typing
- **🟢 Online Status**: Pulsing status dot using `ease-pulse` for active users
- **👥 Contact Sidebar**: Searchable list with unread badges and status indicators
- **🖼️ Image Messages**: Support for image attachments in chat bubbles
- **👍 Message Reactions**: Emoji reactions on messages
- **📅 Date Separators**: Visual dividers between message groups
- **📱 Fully Responsive**: Sidebar hides on mobile, messages adapt to screen width

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main container and date separators |
| `ease-slide-in-left` | Slides sidebar and received messages from left |
| `ease-slide-in-right` | Slides main chat and sent messages from right |
| `ease-slide-up` | Slides up the message input area |
| `ease-delay-100` to `ease-delay-700` | Creates cascading staggered sequence |
| `ease-pulse` | **Looping pulse** on online status dot |
| `ease-hover-lift` | Lift effect on contact items |
| `ease-hover-grow` | Scale effect on buttons |
| `ease-center` | Centers send button icon |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch messages slide in from alternating directions with staggered delays
3. Observe the **typing indicator** bouncing dots animation
4. Notice the **pulsing online status** dot in the header
5. Hover over contact items to see the lift effect
6. Hover over action buttons to see the scale effect
7. Resize to mobile to see the responsive layout (sidebar hides)

## 🎨 Design Highlights

- **Dark Theme**: Modern dark chat aesthetic similar to Discord/Slack
- **Directional Animations**: Clear visual distinction between sent and received
- **Typing Indicator**: Smooth bouncing dots with staggered delays
- **Status System**: Online (green), Away (yellow), Offline (gray) indicators
- **Unread Badges**: Notification counts on contacts

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Keyframes, Flexbox, Custom Properties)
- EaseMotion CSS (via CDN)