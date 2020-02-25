import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading }) {
  return (
    <div id="logo">
      <Link to="/">
        <span>
          <h1>Jtography</h1>
        </span>
      </Link>
    </div>
  );
}
