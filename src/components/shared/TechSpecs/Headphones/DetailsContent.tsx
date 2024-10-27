const DetailsContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div>
      <h2 className="text-lg font-semibold">Dimensions</h2>
      <p>Height: 191 mm Width: 160 mm Depth: 85 mm</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Finish</h2>
      <p>Matte</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Weight</h2>
      <p>0.312 kg</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">LED</h2>
      <p>Light on bottom of left cup indicates connection status.</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Colours</h2>
      <p>Black, White</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Controls and buttons</h2>
      <p>
        Press the Power/Bluetooth button to power on Sonos Ace and pair a device. Use the Content Key to control
        playback, adjust volume, manage calls, and more. The Noise Control button lets you quickly switch between Active
        Noise Cancellation and Aware mode.
      </p>
      <a href="#" className="underline">
        Learn more
      </a>
    </div>
  </div>
);

export default DetailsContent;
