export interface EASAFlightRecord {
  node: number;
  date: number;
  departure: Departure;
  arrival: Arrival;
  aircraft: Aircraft;
  single_pilot_time?: SinglePilotTime;
  multi_pilot_time?: MultiPilotTime;
  total_time_of_flight: number;
  pic_name: string;
  takeoffs: Takeoffs;
  landings: Landings;
  op_cond_time: OperationalConditionTime;
  pilot_func_time: PilotFunctionTime;
  fsdt_session: FSTDSession;
  remarks_and_endorsements?: string;
  signature?: Signature;
}

export interface Departure {
  place: string;
  time: number;
}

export interface Arrival {
  place: string;
  time: number;
}

export interface Aircraft {
  aircraft_type: string;
  registration: string;
}

export interface SinglePilotTime {
  engine_type: EngineType;
  other?: string;
}
export enum EngineType {
  SingleEngine,
  MultiEngine,
  Other,
}
export interface MultiPilotTime {
  time: number;
}

export interface Takeoffs {
  day: number;
  night: number;
}

export interface Landings {
  day: number;
  night: number;
}
export interface OperationalConditionTime {
  night: number;
  ifr: number;
}
export interface PilotFunctionTime {
  pilot_in_command?: number;
  copilot?: number;
  dual?: number;
  instructor?: number;
}

export interface FSTDSession {
  date: number;
  fstd_type: string;
  time: number;
}
export interface Signature {
  signature: boolean;
}
