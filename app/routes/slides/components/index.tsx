import { type ReactNode } from 'react';

const Row = ({ children }: {children: ReactNode}): ReactNode => <div className="flex flex-row text-[16pt] text-left space-x-10 space-around">{children}</div>;

const Half = ({ children }: { children: ReactNode }): ReactNode => <div className="w-1/2">{children}</div>;

const HalfCode = ({ children }: { children: ReactNode }): ReactNode => <div className="w-1/2 font-mono">{children}</div>;

const Indent = ({ children, space }: { children: ReactNode, space?: number }): ReactNode => <p className={`pl-${5 * (space ?? 0)}`}>{children}</p>;

export { Row, Half, HalfCode, Indent };
