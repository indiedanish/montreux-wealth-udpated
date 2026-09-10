'use client';

import { useEffect, useRef, useState } from 'react';

type ScaleMark = {
  value: number;
  label: string;
};

type CalculatorSliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  scaleMarks?: ScaleMark[];
  hint?: string;
};

function defaultFormat(value: number): string {
  return String(value);
}

function clampPercent(percent: number): number {
  return Math.min(100, Math.max(0, percent));
}

export default function CalculatorSlider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  formatValue = defaultFormat,
  scaleMarks,
  hint,
}: CalculatorSliderProps) {
  const range = max - min;
  const percent = range === 0 ? 0 : clampPercent(((value - min) / range) * 100);

  const [isDragging, setIsDragging] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [valueBump, setValueBump] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (isDragging || prevValue.current === value) return;
    prevValue.current = value;
    setIsPopping(true);
    setValueBump(true);
    const timer = window.setTimeout(() => {
      setIsPopping(false);
      setValueBump(false);
    }, 380);
    return () => window.clearTimeout(timer);
  }, [value, isDragging]);

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
    return () => {
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
    };
  }, []);

  const marks =
    scaleMarks ??
    [min, min + range * 0.25, min + range * 0.5, min + range * 0.75, max].map((v) => ({
      value: Math.round(v / step) * step,
      label: defaultFormat(Math.round(v / step) * step),
    }));

  const uniqueMarks = marks.filter(
    (mark, index, arr) => arr.findIndex((m) => m.value === mark.value) === index,
  );

  const knobClass = [
    'calculator-slider-knob',
    isDragging ? 'is-dragging' : '',
    isPopping ? 'is-popping' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="calculator-slider-group">
      <div className="flex items-end justify-between gap-4 mb-3">
        <label htmlFor={id} className="font-body text-xs tracking-widest uppercase text-text-muted">
          {label}
        </label>
        <p
          className={`font-heading text-2xl md:text-3xl text-navy tabular-nums shrink-0 transition-transform duration-300 ${
            valueBump ? 'scale-110' : 'scale-100'
          }`}
          aria-live="polite"
        >
          {formatValue(value)}
        </p>
      </div>

      <div className="calculator-slider-wrap">
        <div className="calculator-slider-visual pointer-events-none" aria-hidden="true">
          <div className="calculator-slider-track">
            <div
              className={`calculator-slider-fill ${isDragging ? 'is-dragging' : ''}`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className={knobClass} style={{ left: `${percent}%` }}>
            <span className="calculator-slider-knob-core" />
            <span className="calculator-slider-knob-ring" />
          </div>
        </div>

        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onPointerDown={() => setIsDragging(true)}
          className="calculator-slider-input"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={formatValue(value)}
        />
      </div>

      <div className="relative mt-3 h-10" aria-hidden="true">
        {uniqueMarks.map((mark) => {
          const markPercent = range === 0 ? 0 : clampPercent(((mark.value - min) / range) * 100);
          const isActive = mark.value === value;
          return (
            <div
              key={mark.value}
              className="absolute top-0 flex flex-col items-center -translate-x-1/2"
              style={{ left: `${markPercent}%` }}
            >
              <span
                className={`block w-px transition-all duration-300 ${
                  isActive ? 'bg-gold h-3 scale-110' : 'bg-gray-300 h-2'
                }`}
              />
              <span
                className={`mt-1.5 font-body text-[10px] md:text-xs whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-gold font-medium' : 'text-text-muted/70'
                }`}
              >
                {mark.label}
              </span>
            </div>
          );
        })}
      </div>

      {hint && <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">{hint}</p>}
    </div>
  );
}
