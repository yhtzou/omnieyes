export default function AiModules() {
  const vivid = [
    "Red light violations",
    "Stop sign violations",
    "Speeding detection",
    "Idle time monitoring",
    "Illegal parking detection",
    "Bus lane violations",
    "Sidewalk parking violations",
  ];

  const omniGuard = [
    "Traffic light warnings",
    "Forward collision warning",
    "Speed alerts",
    "Intersection stop warnings",
    "Pedestrian collision prevention",
    "Lane departure warning (Coming soon)",
  ];

  const driverCare = [
    "Seatbelt monitoring",
    "Phone usage detection",
    "Smoking detection",
    "Fatigue monitoring",
    "Alcohol testing integration",
  ];

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      <div className="relative col-span-2 grid grid-cols-2 gap-4 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
        <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
          前鏡頭
        </span>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">ViViD 駕駛違規偵測</div>
          <div className="space-y-2.5">
            {vivid?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {key}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">OmniGuard 駕駛危險預警</div>
          <div className="space-y-2.5">
            {omniGuard?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative col-span-1 grid grid-cols-1 gap-8 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
        <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
          內鏡頭
        </span>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">
            DriverCare 不當行為偵測
          </div>
          <div className="space-y-2.5">
            {driverCare?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
