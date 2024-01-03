export type courseInfo = {
  instructor: {
    name: string;
    social_media: {
      facebook: boolean;
      twitter: boolean;
      youtube: boolean;
      instagram: boolean;
    };
  };
  course: {
    title: string;
    fee: {
      amount: number;
      currency: string;
    };
    inclusions: {
      on_demand_videos: Number;
      live_qa_sessions: boolean;
      whatsapp_community: boolean;
    };
    about: {
      html_content: string;
    };
    what_to_expect: {
      html_content: string[];
    };
    key_topics: {
      html_content: string[];
    };
  };
  about_instructor: {
    html_content: string[];
  };
  testimonial: {
    text: string;
    reviewer_name: string;
    reviewer_designation: string;
  };
};
