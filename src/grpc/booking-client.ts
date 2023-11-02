import { BookingServiceClient } from "@/proto/BookingServiceClientPb";

const bookingClient = new BookingServiceClient("http://localhost:8085", null, null);

export default bookingClient;
