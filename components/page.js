import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import motion from 'framer-motion'

function Page({ children }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </div>
    </AnimatePresence>
  );
}

export default Page;
