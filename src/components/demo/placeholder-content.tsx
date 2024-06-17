import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function PlaceholderContent() {
  return (
    <Card className="mt-6 rounded-lg shadow-lg border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-center min-h-[calc(100vh - 252px)]">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
              layout="responsive"
            />
            <div className="absolute bottom-4 right-4">
              <Link
                href="https://www.barkprotocol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground"
              >
                © 2024 BARK Protocol. All rights reserved. Designed by Barkmannen
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
