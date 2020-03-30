import React from 'react';
import { Link } from 'gatsby';

export default function Header({ title, heading }) {
  return (
    <div id="logo">
      <Link to="/">
        <span>
          <h1>Jtography Media</h1>
        </span>
      </Link>
    </div>
  );
}
