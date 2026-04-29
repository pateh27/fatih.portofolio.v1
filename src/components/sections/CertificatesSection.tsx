import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Certificate } from "@/lib/types";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <SectionWrapper id="certificates" label="Certificates">
      <div className="flex flex-col gap-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col gap-0.5">
            {cert.url ? (
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline w-fit"
                style={{ color: "var(--color-text-primary)", fontSize: 12, fontWeight: 500 }}
              >
                {cert.name}
              </Link>
            ) : (
              <span style={{ color: "var(--color-text-primary)", fontSize: 12, fontWeight: 500 }}>
                {cert.name}
              </span>
            )}

            <span style={{ color: "var(--color-text-muted)", fontSize: 11 }}>
              {cert.issuer} · {cert.date}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
