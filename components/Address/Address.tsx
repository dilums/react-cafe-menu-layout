export default function Address() {
  return (
    <address className="flex py-3 justify-center mt-6 flex-wrap address">
      <div className="flex">
        <svg viewBox="0 0 384 512" width="15" fill="currentColor">
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
        </svg>
        <p className="ml-4">123 Main Street &middot; Smalltown, PA</p>
      </div>
      <div className="flex  mt-2 md:mt-0">
        <svg
          viewBox="0 0 512 512"
          width="15"
          fill="currentColor"
          className="ml-8"
        >
          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
        </svg>
        <a href="4125550100" className="ml-4">
          412-555-0100
        </a>
      </div>
    </address>
  );
}
