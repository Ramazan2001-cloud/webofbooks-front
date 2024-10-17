import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const isLoign: boolean = true;

export function middleware(request: NextRequest) {
    if (isLoign) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/', '/profile', '/books'],
};
