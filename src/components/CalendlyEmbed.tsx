import { CALENDLY_MEETING_URL } from '../constants/calendly';

type CalendlyEmbedProps = {
  clipHeader?: boolean;
  height?: string;
};

export default function CalendlyEmbed({ clipHeader = true, height = '680px' }: CalendlyEmbedProps) {
  if (clipHeader) {
    return (
      <div className="bg-white shadow-sm overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden" style={{ height }}>
          <iframe
            title="Schedule a meeting with Montreux Wealth"
            src={CALENDLY_MEETING_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0 w-full h-[calc(100%+72px)] -top-[72px] border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm overflow-hidden border border-gray-100">
      <iframe
        title="Schedule a meeting with Montreux Wealth"
        src={CALENDLY_MEETING_URL}
        width="100%"
        height={height}
        frameBorder="0"
        className="w-full border-0"
      />
    </div>
  );
}
