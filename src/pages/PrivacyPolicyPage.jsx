import { MainHeader } from "../components/general";

const PrivacyPolicyPage = () => {
  return (
    <>
      <MainHeader
        img={"/images/header-images/contact.png"}
        link={"/privacy-policy"}
        title="Privacy Policy"
      />
      <main id="content">
        <div className="mx-auto px-4 pb-6 pt-12 text-center sm:px-6 md:max-w-screen-sm lg:px-8">
          <h1 className="mb-2 text-2xl font-bold md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-gray-700">Last updated: January 31, 2024</p>
        </div>

        <div className="mx-auto px-4 pb-12 sm:px-6 sm:pb-20 md:max-w-screen-sm md:pt-6 lg:max-w-[992px] lg:px-8">
          <div className="grid gap-4 md:gap-8">
            <div>
              <p className="mb-8 text-xl text-black-3">
                This Privacy Policy outlines our practices regarding the
                collection, use, and sharing of personal information through our
                digital products and services, including Apexrim International
                (apexriminternational.com). By using our services, provided by
                apexriminternational.com, you agree to the collection and use of
                information as described in this policy.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Information Collected
              </h2>
              <p className="mb-5 text-black-3">
                At Apexrim International, your privacy is our priority. We do
                not share, sell, or rent your personal information to third
                parties. All data stored via our services is owned by you or
                your business and can be transferred or deleted upon request,
                though this may limit access to certain content.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Account Information
              </h2>
              <p className="mb-5 text-black-3">
                Creating an account at Apexrim International requires providing
                personal details such as your name, email address, and password,
                necessary for account setup and access.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Payment Information
              </h2>
              <p className="mb-5 text-black-3">
                For payment processing, we use secure third-party payment
                processors. During transactions, these processors may ask for
                personal details like your name, address, email, and credit card
                information. The privacy policies of these third-party payment
                processors govern their data handling. Apexrim International is
                not responsible for their practices.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Usage Information</h2>
              <p className="mb-5 text-black-3">
                We collect data on user interactions with Apexrim International,
                including usage patterns and device information, to improve our
                platform and enhance your experience.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Legal Compliance and General Use
              </h2>
              <p className="mb-5 text-black-3">
                Apexrim International may release personal information if
                required by law, such as in response to a court order or fraud
                investigation. We also use aggregated, non-identifiable user
                data for general analytical purposes.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Data Sharing and Disclosure
              </h2>
              <p className="mb-5 text-black-3">
                We use third-party services like Google Analytics for analytics
                purposes. These parties access your data only for performing
                tasks on our behalf and are obligated not to disclose or use it
                for other purposes.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                International Data Transfer
              </h2>
              <p className="mb-5 text-black-3">
                Your information may be transferred to and maintained on
                computers outside your jurisdiction. Our primary servers are
                located in the US.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Your Rights</h2>
              <p className="mb-5 text-black-3">
                You have the right to access, correct, and request the deletion
                of your personal data, with certain limitations on access to our
                products and services.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Data Retention</h2>
              <p className="mb-5 text-black-3">
                We retain personal data as long as your account is active or as
                needed to provide services.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Security</h2>
              <p className="mb-5 text-black-3">
                We are committed to the security of your data, implementing
                encryption and regular security standards.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Children's Privacy</h2>
              <p className="mb-5 text-black-3">
                Apexrim International is intended for use by individuals who
                have reached the legal age in their jurisdiction and reside in
                regions where such use is permissible. We do not knowingly
                collect data from individuals under the legal age.
              </p>

              <h2 className="mb-2 text-lg font-semibold">
                Changes to Privacy Policy
              </h2>
              <p className="mb-5 text-black-3">
                We may modify this policy at any time. Continued use of Apexrim
                International signifies acceptance of these changes.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Contact Us</h2>
              <p className="mb-5 text-black-3">
                For questions about this Privacy Policy or our privacy
                practices, contact us via live chat on our website.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Agreement</h2>
              <p className="mb-5 text-black-3">
                By using Apexrim International products and services, you
                acknowledge your understanding and agreement to this Privacy
                Policy.
              </p>

              <h2 className="mb-2 text-lg font-semibold">Privacy Changes</h2>
              <p className="mb-5 text-black-3">
                If we change our privacy policy, we will post those changes on
                this page. Registered users will be sent an email that outlines
                changes made to the privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
