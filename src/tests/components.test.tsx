import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

describe('Header component', () => {
  it('renders brand logo and primary navigation links', () => {
    render(<Header />);
    expect(screen.getByAltText('Arvon')).toBeInTheDocument();
    // Using getAllByRole because desktop and mobile menus both have links
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThanOrEqual(1);

    const propLinks = screen.getAllByRole('link', { name: /properties/i });
    expect(propLinks.length).toBeGreaterThanOrEqual(1);

    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('toggles mobile menu drawer on button click', () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText(/open navigation menu/i);
    fireEvent.click(toggleButton);
    // Menu opens and aria-label changes to close navigation menu
    expect(screen.getByLabelText(/close navigation menu/i)).toBeInTheDocument();
  });
});

describe('Hero component', () => {
  it('renders main headline and inquiry form', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Alex Morgan/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/alex@domain.com/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit request/i })).toBeInTheDocument();
  });

  it('validates required inputs before submission', async () => {
    render(<Hero />);
    const submitBtn = screen.getByRole('button', { name: /submit request/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThan(0);
    });
  });
});
