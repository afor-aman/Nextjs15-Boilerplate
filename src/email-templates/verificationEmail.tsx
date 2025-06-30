import { Button } from '@/components/ui/button';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  url: string;
}

export function EmailTemplate({ firstName, url }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <a href={url} className="bg-blue-500 text-white px-4 py-2 rounded-md">Verify your email</a>
    </div>
  );
}