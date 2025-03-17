
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export const RequestQuoteButton: React.FC = () => {
  return (
    <Link 
      to="/#contact" 
      className="inline-flex items-center px-4 py-2 bg-[#AA8066] text-white rounded-md font-medium hover:bg-[#96705a] transition-colors text-sm"
    >
      <MessageSquare className="mr-2 h-4 w-4" />
      Request Custom Quote
    </Link>
  );
};
