import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class BookingId extends jspb.Message {
  getId(): number;
  setId(value: number): BookingId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingId.AsObject;
  static toObject(includeInstance: boolean, msg: BookingId): BookingId.AsObject;
  static serializeBinaryToWriter(message: BookingId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingId;
  static deserializeBinaryFromReader(message: BookingId, reader: jspb.BinaryReader): BookingId;
}

export namespace BookingId {
  export type AsObject = {
    id: number,
  }
}

export class UserId extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): UserId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserId.AsObject;
  static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
  static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserId;
  static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
}

export namespace UserId {
  export type AsObject = {
    userid: number,
  }
}

export class Seat extends jspb.Message {
  getSeatid(): number;
  setSeatid(value: number): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seat.AsObject;
  static toObject(includeInstance: boolean, msg: Seat): Seat.AsObject;
  static serializeBinaryToWriter(message: Seat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seat;
  static deserializeBinaryFromReader(message: Seat, reader: jspb.BinaryReader): Seat;
}

export namespace Seat {
  export type AsObject = {
    seatid: number,
  }
}

export class SeatList extends jspb.Message {
  getSeatsList(): Array<Seat>;
  setSeatsList(value: Array<Seat>): SeatList;
  clearSeatsList(): SeatList;
  addSeats(value?: Seat, index?: number): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatList.AsObject;
  static toObject(includeInstance: boolean, msg: SeatList): SeatList.AsObject;
  static serializeBinaryToWriter(message: SeatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatList;
  static deserializeBinaryFromReader(message: SeatList, reader: jspb.BinaryReader): SeatList;
}

export namespace SeatList {
  export type AsObject = {
    seatsList: Array<Seat.AsObject>,
  }
}

export class SeatStatus extends jspb.Message {
  getSeats(): Seat | undefined;
  setSeats(value?: Seat): SeatStatus;
  hasSeats(): boolean;
  clearSeats(): SeatStatus;

  getStatus(): string;
  setStatus(value: string): SeatStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SeatStatus): SeatStatus.AsObject;
  static serializeBinaryToWriter(message: SeatStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatStatus;
  static deserializeBinaryFromReader(message: SeatStatus, reader: jspb.BinaryReader): SeatStatus;
}

export namespace SeatStatus {
  export type AsObject = {
    seats?: Seat.AsObject,
    status: string,
  }
}

export class StatusTime extends jspb.Message {
  getStarttime(): number;
  setStarttime(value: number): StatusTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusTime.AsObject;
  static toObject(includeInstance: boolean, msg: StatusTime): StatusTime.AsObject;
  static serializeBinaryToWriter(message: StatusTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusTime;
  static deserializeBinaryFromReader(message: StatusTime, reader: jspb.BinaryReader): StatusTime;
}

export namespace StatusTime {
  export type AsObject = {
    starttime: number,
  }
}

export class BookingTime extends jspb.Message {
  getStarttime(): number;
  setStarttime(value: number): BookingTime;

  getEndtime(): number;
  setEndtime(value: number): BookingTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingTime.AsObject;
  static toObject(includeInstance: boolean, msg: BookingTime): BookingTime.AsObject;
  static serializeBinaryToWriter(message: BookingTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingTime;
  static deserializeBinaryFromReader(message: BookingTime, reader: jspb.BinaryReader): BookingTime;
}

export namespace BookingTime {
  export type AsObject = {
    starttime: number,
    endtime: number,
  }
}

export class BookingRequest extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): BookingRequest;
  hasUser(): boolean;
  clearUser(): BookingRequest;

  getBookingtime(): BookingTime | undefined;
  setBookingtime(value?: BookingTime): BookingRequest;
  hasBookingtime(): boolean;
  clearBookingtime(): BookingRequest;

  getSeat(): Seat | undefined;
  setSeat(value?: Seat): BookingRequest;
  hasSeat(): boolean;
  clearSeat(): BookingRequest;

  getStatus(): BookingStatusEnum;
  setStatus(value: BookingStatusEnum): BookingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BookingRequest): BookingRequest.AsObject;
  static serializeBinaryToWriter(message: BookingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingRequest;
  static deserializeBinaryFromReader(message: BookingRequest, reader: jspb.BinaryReader): BookingRequest;
}

export namespace BookingRequest {
  export type AsObject = {
    user?: UserId.AsObject,
    bookingtime?: BookingTime.AsObject,
    seat?: Seat.AsObject,
    status: BookingStatusEnum,
  }
}

export class BookingResponse extends jspb.Message {
  getId(): BookingId | undefined;
  setId(value?: BookingId): BookingResponse;
  hasId(): boolean;
  clearId(): BookingResponse;

  getBookingdata(): BookingRequest | undefined;
  setBookingdata(value?: BookingRequest): BookingResponse;
  hasBookingdata(): boolean;
  clearBookingdata(): BookingResponse;

  getCheckintime(): number;
  setCheckintime(value: number): BookingResponse;

  getCheckouttime(): number;
  setCheckouttime(value: number): BookingResponse;

  getIsactive(): boolean;
  setIsactive(value: boolean): BookingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BookingResponse): BookingResponse.AsObject;
  static serializeBinaryToWriter(message: BookingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingResponse;
  static deserializeBinaryFromReader(message: BookingResponse, reader: jspb.BinaryReader): BookingResponse;
}

export namespace BookingResponse {
  export type AsObject = {
    id?: BookingId.AsObject,
    bookingdata?: BookingRequest.AsObject,
    checkintime: number,
    checkouttime: number,
    isactive: boolean,
  }
}

export class BookingList extends jspb.Message {
  getBookingsList(): Array<BookingResponse>;
  setBookingsList(value: Array<BookingResponse>): BookingList;
  clearBookingsList(): BookingList;
  addBookings(value?: BookingResponse, index?: number): BookingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingList.AsObject;
  static toObject(includeInstance: boolean, msg: BookingList): BookingList.AsObject;
  static serializeBinaryToWriter(message: BookingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingList;
  static deserializeBinaryFromReader(message: BookingList, reader: jspb.BinaryReader): BookingList;
}

export namespace BookingList {
  export type AsObject = {
    bookingsList: Array<BookingResponse.AsObject>,
  }
}

export class BookingUpdateRequest extends jspb.Message {
  getId(): BookingId | undefined;
  setId(value?: BookingId): BookingUpdateRequest;
  hasId(): boolean;
  clearId(): BookingUpdateRequest;

  getBookingdata(): BookingRequest | undefined;
  setBookingdata(value?: BookingRequest): BookingUpdateRequest;
  hasBookingdata(): boolean;
  clearBookingdata(): BookingUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookingUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BookingUpdateRequest): BookingUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: BookingUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookingUpdateRequest;
  static deserializeBinaryFromReader(message: BookingUpdateRequest, reader: jspb.BinaryReader): BookingUpdateRequest;
}

export namespace BookingUpdateRequest {
  export type AsObject = {
    id?: BookingId.AsObject,
    bookingdata?: BookingRequest.AsObject,
  }
}

export class UpdateBookingStatusRequest extends jspb.Message {
  getId(): BookingId | undefined;
  setId(value?: BookingId): UpdateBookingStatusRequest;
  hasId(): boolean;
  clearId(): UpdateBookingStatusRequest;

  getStatus(): BookingStatusEnum;
  setStatus(value: BookingStatusEnum): UpdateBookingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookingStatusRequest): UpdateBookingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookingStatusRequest;
  static deserializeBinaryFromReader(message: UpdateBookingStatusRequest, reader: jspb.BinaryReader): UpdateBookingStatusRequest;
}

export namespace UpdateBookingStatusRequest {
  export type AsObject = {
    id?: BookingId.AsObject,
    status: BookingStatusEnum,
  }
}

export enum BookingStatusEnum { 
  UNKNOWN = 0,
  BOOKED = 1,
  CHECKED_IN = 2,
  COMPLETED = 3,
  MISSED = 4,
}
