const PowerContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div>
      <h2 className="text-lg font-semibold">Bluetooth</h2>
      <p>Bluetooth 5.4 supports audio streaming from any Bluetooth-enabled device.</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Battery</h2>
      <p>
        Li-ion, 1060 mAh battery provides up to 30 hours of listening time or 24 hours of call time with Active Noise
        Cancellation or Aware mode enabled.
      </p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Operating temperature</h2>
      <p>14°F to 104°F (-10°C to 40°C)</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Charging</h2>
      <p>
        Charge with included USB-C cable and a compatible power adapter. Rapid charge provides 3 hours listening time in
        3 minutes from 0%. Complete charge from 0% requires up to 3 hours.
      </p>
      <a href="#" className="underline">
        Learn more
      </a>
    </div>
  </div>
);

export default PowerContent;
