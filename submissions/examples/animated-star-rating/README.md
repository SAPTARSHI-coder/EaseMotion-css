.ease-stars {
  display: inline-flex;
  gap: 4px;
  cursor: pointer;
  font-size: 28px;
}

.ease-stars .star {
  color: #ddd;
  transition: color 0.2s ease, transform 0.2s ease;
}

.ease-stars .star:hover,
.ease-stars .star:hover ~ .star {
  color: #facc15;
  transform: scale(1.15);
}