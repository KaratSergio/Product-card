import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

interface MoreInfoProps {
  content: string;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ content }) => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => setOpen(value === 'more-info')}
    >
      <Accordion.Item value="more-info">
        <Accordion.Trigger className="group flex p-0 bg-transparent gap-2 w-full items-center text-left text-gray-500 hover:text-gray-900 transition-colors duration-200 focus:outline-none hover:border-transparent">
          <span>More Info</span>
          <ChevronDownIcon
            className={`transition-transform duration-[600ms] transform ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </Accordion.Trigger>
        <Accordion.Content
          className={`text-gray-700 overflow-hidden transition-all duration-[900ms] ease-in-out`}
          style={{
            maxHeight: open ? '500px' : '0',
            opacity: open ? 1 : 0,
            transition: 'max-height 900ms ease-in-out, opacity 900ms ease-in-out',
          }}
        >
          <div className="mt-2">
            <p className="text-sm sm:text-base md:text-lg">{content}</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default MoreInfo;
