import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AudioContent from './Headphones/AudioContent';
import DetailsContent from './Headphones/DetailsContent';
import PowerContent from './Headphones/PowerContent';
import BoxContent from './Headphones/BoxContent';
import RequirementsContent from './Headphones/RequirementsContent';

const TechSpecs = () => {
  type TabKey = 'audio' | 'details' | 'power' | 'box' | 'requirements';
  const [selectedTab, setSelectedTab] = useState<TabKey>('audio');

  const renderContent = () => {
    switch (selectedTab) {
      case 'audio':
        return <AudioContent />;
      case 'details':
        return <DetailsContent />;
      case 'power':
        return <PowerContent />;
      case 'box':
        return <BoxContent />;
      case 'requirements':
        return <RequirementsContent />;
      default:
        return null;
    }
  };

  return (
    <div id="tech-specs" className="w-full">
      <h2 className="text-3xl md:text-5xl m-4 md:m-8 font-semibold">Tech Specs</h2>
      <Tabs.Root defaultValue="audio" onValueChange={(value) => setSelectedTab(value as TabKey)}>
        <Tabs.List className="flex flex-wrap gap-4 md:gap-12 pb-2">
          <Tabs.Trigger value="audio" className="tab-trigger">
            Audio
          </Tabs.Trigger>
          <Tabs.Trigger value="details" className="tab-trigger">
            Details + Dimensions
          </Tabs.Trigger>
          <Tabs.Trigger value="power" className="tab-trigger">
            Power + Connectivity
          </Tabs.Trigger>
          <Tabs.Trigger value="box" className="tab-trigger">
            Box Contents
          </Tabs.Trigger>
          <Tabs.Trigger value="requirements" className="tab-trigger">
            Requirements
          </Tabs.Trigger>
        </Tabs.List>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-2 md:mt-4 text-gray-700"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </Tabs.Root>
    </div>
  );
};

export default TechSpecs;
