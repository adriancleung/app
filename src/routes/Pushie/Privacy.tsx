import React from 'react';
import { Box, Text, Image } from 'grommet';
import Logo from '../../assets/pushie.svg';

type Props = {};

const PushiePrivacy: React.FC<Props> = () => {
  return (
    <>
      <Box width={'100vw'} height={'100vh'} overflow={'scroll'}>
        <Box align={'start'} pad={{ horizontal: 'small' }}>
          <Box width={'300px'} height={'500px'}>
            <Image src={Logo} fit={'contain'} />
          </Box>
          <Text size={'3rem'} weight={900}>
            Privacy Policy
          </Text>
        </Box>
        <Box pad={{ horizontal: 'medium' }}>
          <Text style={{ textAlign: 'justify' }}>
            <b>LAST UPDATE OF THIS PRIVACY POLICY - 2021-01-30</b>
            <br />
            <br />
            BEFORE USING OUR SITES, PLEASE READ THIS PRIVACY POLICY CAREFULLY.
            <br />
            This policy applies to all information collected or submitted on
            pushie’s website and our apps for iPhone and any other devices and
            platforms.
            <br />
            <br />
            <b>Information we collect</b>
            <br />
            New pushie accounts are created with email addresses and passwords.
            Email addresses are only used for logging in, password resets,
            responding to emails that you initiate, and sending notifications
            that you request. We don’t send promotional emails. We store
            information about your notifications to sync this information
            between your devices.
            <br />
            <br />
            <b>Technical basics</b>
            <br />
            If you enable notifications, we must store a token to send them. We
            never use notifications for marketing. We use tokens in the app to
            keep you logged in. Our server software may also store basic
            technical information, such as your IP address, in temporary memory
            or logs.
            <br />
            <br />
            <b>iCloud</b>
            <br />
            pushie does not store your data in Apple’s iCloud service.
            <br />
            <br />
            <b>Ads and analytics</b>
            <br />
            pushie does not include ads and does not collect analytical data for
            the purpose of advertisements. pushie uses Apple's App Store Connect
            service to collects anonymous aggregated metrics to measure user
            engagement. No personal data is used to target ads or measure user
            engagement.
            <br />
            <br />
            <b>Information usage</b>
            <br />
            We use the information we collect to operate and improve our
            website, apps, and customer support. We do not share personal
            information with outside parties except to the extent necessary to
            accomplish pushie's functionality. We may share anonymous, aggregate
            statistics with outside parties, such as how many people uses the
            app. We may disclose your information in response to subpoenas,
            court orders, or other legal requirements; to exercise our legal
            rights or defend against legal claims; to investigate, prevent, or
            take action regarding illegal activities, suspected fraud or abuse,
            violations of our policies; or to protect our rights and property.
            In the future, we may sell to, buy, merge with, or partner with
            other businesses. In such transactions, user information may be
            among the transferred assets.
            <br />
            <br />
            <b>Security</b>
            <br />
            <br />
            We implement a variety of security measures to help keep your
            information secure. For instance, all communication with the app and
            website requires HTTPS. Passwords are hashed, not stored, using
            industry-standard methods.
            <br />
            <br />
            <b>Accessing, changing, or deleting information</b>
            <br />
            You may access or change your information or delete your account by
            emailing support@adrianleung.dev. Deleted information may be kept in
            backups for up to 90 days. Backups are encrypted and are only
            accessed if needed for disaster recovery. pushie may delete your
            information at any time and for any reason, such as technical needs,
            legal concerns, abuse prevention, removal of idle accounts, data
            loss, or any other reason.
            <br />
            <br />
            <b>Third-party links and content</b>
            <br />
            pushie uses services from third-party vendors. These have their own
            independent privacy policies, and we have no responsibility or
            liability for their content or activities.
            <br />
            <br />
            <b>California Online Privacy Protection Act Compliance</b>
            <br />
            We comply with the California Online Privacy Protection Act. We
            therefore will not distribute your personal information to outside
            parties without your consent.
            <br />
            <br />
            <b>Children’s Online Privacy Protection Act Compliance</b>
            <br />
            We never collect or maintain information at our website from those
            we actually know are under 13, and no part of our website is
            structured to attract anyone under 13.
            <br />
            <br />
            <b>Information for European Union Customers</b>
            <br />
            By using pushie and providing your information, you authorize us to
            collect, use, and store your information outside of the European
            Union.
            <br />
            <br />
            <b>International Transfers of Information</b>
            <br />
            Information may be processed, stored, and used outside of the
            country in which you are located. Data privacy laws vary across
            jurisdictions, and different laws may be applicable to your data
            depending on where it is processed, stored, or used.
            <br />
            <br />
            <b>Your Consent</b>
            <br />
            By using our site or apps, you consent to our privacy policy.
            <br />
            <br />
            <b>Contacting Us</b>
            <br />
            If you have questions regarding this privacy policy, you may email
            contact@adrianleung.dev. Account deletion are available only through
            email requests.
            <br />
            <br />
            <b>Changes to this policy</b>
            <br />
            If we decide to change our privacy policy, we will post those
            changes on this page. Summary of changes so far:
            <br />
            <li>2021-01-30: First published.</li>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PushiePrivacy;
