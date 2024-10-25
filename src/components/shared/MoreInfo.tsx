import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface MoreInfoProps {
  content: string;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ content }) => {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="more-info">
        <Accordion.Trigger className="group flex p-0 bg-transparent gap-2 w-full items-center text-left text-gray-500 hover:text-gray-900 transition-colors duration-200 focus:outline-none hover:border-transparent">
          <span>More Info</span>
          <ChevronDownIcon
            className="transition-transform duration-[600ms] transform group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
        <Accordion.Content className="text-gray-700 overflow-hidden transition-all duration-[9000ms] ease-in-out max-h-0 data-[state=open]:max-h-[500px] mt-2">
          <p className="text-sm sm:text-base md:text-lg">{content}</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default MoreInfo;
