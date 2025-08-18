function PrivacyPolicy() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔐 Privacy Policy</h2>
      <p className="text-gray-700">
        This website uses the YouTube API to fetch and display public content like trending videos,
        video details, and comments. We do not collect or store any personal data from users.
      </p>
      <p className="mt-4 text-gray-700">
        All data shown belongs to YouTube and its content creators.  
        By using this site, you agree to be bound by the{" "}
        <a
          href="https://www.youtube.com/t/terms"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          YouTube Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          Google Privacy Policy
        </a>.
      </p>
    </div>
  );
}
