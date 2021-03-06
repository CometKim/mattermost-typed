// @flow

declare module 'mattermost-redux/client/client4' {
    declare export default mattermost$redux$Client4;
}

declare module 'mattermost-redux/client/client4.js' {
    declare export default mattermost$redux$Client4;
}

type StatusOK = {
    status: 'OK'
}

declare class mattermost$redux$Client4 {
    constructor(): void;
  
    // Properties
    setUserAgent(userAgent: string): void;
  
    getToken(): string;
    setToken(token: string): string;
  
    setAcceptLanguage(locale: mattermost$Locale): void;
  
    setEnableLogging(enable: boolean): void;
  
    setIncludeCookies(include: boolean): void;
  
    setUserId(userId: string): void;
  
    getServerVersion(): string;
  
    // URIs
    getUrl(): string;
    setUrl(url: string): void;
  
    getUrlVersion(): string;
  
    getBaseRoute(): string;
  
    getUsersRoute(): string;
    getUserRoute(userId: string): string;
  
    getTeamsRoute(): string;
    getTeamRoute(teamId: string): string;
    getTeamNameRoute(teamName: string): string;
    getTeamMembersRoute(teamId: string): string;
    getTeamMemberRoute(teamId: string, userId: string): string;
  
    getChannelsRoute(): string;
    getChannelRoute(channelId: string): string;
    getChannelMembersRoute(channelId: string): string;
    getChannelMemberRoute(channelId: string, userId: string): string;
  
    getPostsRoute(): string;
    getPostRoute(postId: string): string;
  
    getReactionsRoute(): string;
  
    getCommandsRoute(): string;
  
    getFilesRoute(): string;
    getFileRoute(fileId: string): string;
  
    getPreferencesRoute(userId: string): string;
  
    getIncomingHooksRoute(): string;
    getIncomingHookRoute(hookId: string): string;
  
    getOutgoingHooksRoute(): string;
    getOutgoingHookRoute(hookId: string): string;
  
    getOAuthRoute(): string;
    getOAuthAppsRoute(): string;
    getOAuthAppRoute(appId: string): string;
  
    getEmojisRoute(): string;
    getEmojiRoute(emojiId: string): string;
  
    getBrandRoute(): string;
    getBrandImageUrl(timestamp: number): string;
    getJobsRoute(): string;
    
    getPluginsRoute(): string;
    getPluginRoute(pluginId: string): string;
  
    // User Routes
    getMe(): Promise<mattermost$User>;
    patchMe(user: mattermost$UserPatch): Promise<mattermost$User>;
    getUser(userId: string): Promise<mattermost$User>;
    getUserByUsername(username: string): Promise<mattermost$User>;
    getUserByEmail(email: string): Promise<mattermost$User>;
    createUser(user: mattermost$User): Promise<mattermost$User>;
    updateUser(user: mattermost$UserPatch & { id: string }): Promise<mattermost$User>;
  
    login(loginId: string, password: string, token?: string, deviceId?: string, ldapOnly?: boolean): Promise<mattermost$User & { failed_attempts: number }>;
    logout(): Promise<Response>;
    
    getProfiles(page?: number, perPage?: number): Promise<mattermost$User[]>;
    getProfilesByIds(userIds: string[]): Promise<mattermost$User[]>;
    getProfilesByUsernames(usernames: string[]): Promise<mattermost$User[]>;
    getProfilesInTeam(teamId: string, page?: number, perPage?: number, sort?: string): Promise<mattermost$User[]>;
    getProfilesNotInTeam(teamId: string, page?: number, perPage?: number): Promise<mattermost$User[]>;
    getProfilesWithoutTeam(page?: number, perPage?: number): Promise<mattermost$User[]>;
    getProfilesInChannel(channelId: string, page?: number, perPage?: number): Promise<mattermost$User[]>;
    getProfilesNotInChannel(teamId: string, channelId: string, page?: number, perPage?: number): Promise<mattermost$User[]>;
    searchUsers(term: string, options?: mattermost$UserSearch): Promise<mattermost$User[]>;
    autocompleteUsers(name: string, teamId: string, channelId: string): Promise<mattermost$UserAutocomplete>;
  
    updateUserRoles(userId: string, roles: string): Promise<StatusOK>;
    updateUserMfa(userId: string, activate: boolean, code?: string): Promise<StatusOK>;
  
    getProfilePictureUrl(userId: string, lastPictureUpdate: number): string;
  
    getSessions(userId: string): Promise<mattermost$Session[]>;
    getCurrentSession(userId: string, token: string): Promise<mattermost$Session>;
    revokeSession(userId: string, sessionId: string): Promise<StatusOK>;
    attachDevice(deviceId: string): Promise<StatusOK>;
  
    getUserAudits(userId: string, page?: number, perPage?: number): Promise<mattermost$Audit[]>;
  
    checkUserMfa(loginId: string): Promise<{ mfa_required: boolean }>;
    generateMfaSecret(userId: string): Promise<mattermost$MfaSecret>;
  
    getStatusesByIds(userIds: string[]): Promise<mattermost$UserStatus[]>;
    getStatus(userId: string): Promise<mattermost$UserStatus>;
    updateStatus(status: mattermost$UserStatus): Promise<mattermost$UserStatus>;
  
    switchEmailToOAuth(service: mattermost$AuthService, email: string, password: string, mfaCode?: string): Promise<{ follow_link: string }>;
    switchOAuthToEmail(currentService: mattermost$AuthService, email: string, password: string): Promise<{ follow_link: string }>;
    switchEmailToLdap(email: string, emailPassword: string, ldapId: string, ldapPassword: string, mfaCode?: string): Promise<{ follow_link: string }>;
    switchLdapToEmail(ldapPassword: string, email: string, emailPassword: string, mfaCode?: string): Promise<{ follow_link: string }>;
  
    getAuthorizedOAuthApps(userId: string): Promise<mattermost$OAuthApp[]>;
    authorizeOAuthApp(responseType: 'code', clientId: string, redirectUri: string, state: string, scope: string): Promise<{ redirect_url: string }>;
    deauthorizeOAuthApp(clientId: string): Promise<StatusOK>;
  
    createUserAccessToken(userId: string, description: string): Promise<mattermost$UserAccessToken>;
    getUserAccessToken(tokenId: string): Promise<mattermost$UserAccessToken>;
    getUserAccessTokensForUser(userId: string, page?: number, perPage?: number): Promise<mattermost$UserAccessToken[]>;
    revokeUserAccessToken(tokenId: string): Promise<StatusOK>;
    
    // Team Routes
    createTeam(team: mattermost$Team): Promise<mattermost$Team>;
    updateTeam(team: mattermost$TeamPatch & { id: string }): Promise<mattermost$Team>;
  
    checkIfTeamExists(teamName: string): Promise<{ exists: boolean }>;
  
    getTeams(page?: number, perPage?: number): Promise<mattermost$Team[]>;
    getTeam(teamId: string): Promise<mattermost$Team>;
    getMyTeams(): Promise<mattermost$Team[]>;
    getTeamsForUser(userId: string): Promise<mattermost$Team[]>;
  
    getMyTeamMembers(): Promise<mattermost$TeamMember[]>;
    getMyTeamUnreads(): Promise<mattermost$TeamUnread[]>;
  
    getTeamMembers(teamId: string, page?: number, perPage?: number): Promise<mattermost$TeamMember[]>;
    getTeamMembersForUser(userId: string): Promise<mattermost$TeamMember[]>;
    getTeamMember(teamId: string, userId: string): Promise<mattermost$TeamMember>;
    getTeamMembersByIds(teamId: string, userIds: string[]): Promise<mattermost$TeamMember[]>;
  
    addToTeam(teamId: string, userId: string): Promise<mattermost$TeamMember>;
    addToTeamFromInvite(hash?: string, data?: string, inviteId?: string): Promise<mattermost$TeamMember>;
    addUsersToTeam(teamId: string, userIds: string[]): Promise<mattermost$TeamMember[]>;
    joinTeam(inviteId: string): Promise<mattermost$TeamMember>;
    removeFromTeam(teamId: string, userId: string): Promise<StatusOK>;
  
    getTeamStats(teamId: string): Promise<mattermost$TeamStats>;
  
    getTeamInviteInfo(inviteId: string): Promise<mattermost$Team>;
  
    updateTeamMemberRoles(teamId: string, userId: string, roles: string): Promise<StatusOK>;
  
    sendEmailInvitesToTeam(teamId: string, emails: string[]): Promise<StatusOK>;
  
    importTeam(teamId: string, file: File, importFrom: 'slack'): Promise<{ results: string }>;
    
    // Channel Routes
    createChannel(channel: mattermost$Channel): Promise<mattermost$Channel>;
    createDirectChannel(userIds: [string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string, string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string, string, string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string, string, string, string, string]): Promise<mattermost$Channel>;
    createGroupChannel(userIds: [string, string, string, string, string, string, string]): Promise<mattermost$Channel>;
    deleteChannel(channelId: string): Promise<StatusOK>;
    updateChannel(channel: mattermost$Channel): Promise<mattermost$Channel>;
    patchChannel(channelId: string, patch: mattermost$ChannelPatch): Promise<mattermost$Channel>;
  
    updateChannelNotifyProps(props: mattermost$ChannelMember$NotifyProps): Promise<StatusOK>;
  
    getChannel(channelId: string): Promise<mattermost$Channel>;
    getChannelByName(teamId: string, channelName: string): Promise<mattermost$Channel>;
    getChannels(teamId: string, page?: number, perPage?: number): Promise<mattermost$Channel[]>;
    getMyChannels(teamId: string): Promise<mattermost$Channel[]>;
  
    getMyChannelMember(channelId: string): Promise<mattermost$ChannelMember>;
    getMyChannelMembers(teamId: string): Promise<mattermost$ChannelMember[]>;
    getChannelMembers(channelId: string, page?: number, perPage?: number): Promise<mattermost$ChannelMember[]>;
    getChannelMember(channelId: string, userId: string): Promise<mattermost$ChannelMember>;
    getChannelMembersByIds(channelId: string, userIds: string[]): Promise<mattermost$ChannelMember[]>;
  
    addToChannel(userId: string, channelId: string): Promise<mattermost$ChannelMember>;
    removeFromChannel(userId: string, channelId: string): Promise<StatusOK>;
  
    updateChannelMemberRoles(channelId: string, userId: string, roles: string): Promise<StatusOK>;
  
    getChannelStats(channelId: string): Promise<mattermost$ChannelStats>;
  
    viewMyChannel(channelId: string, prevChannelId?: string): Promise<{ status: 'OK', last_viewed_at_times: { [channel_id: string]: number } }>;
  
    searchChannels(teamId: string, term: string): Promise<mattermost$Channel[]>;
    
    // Post Routes
    createPost(post: mattermost$Post): Promise<mattermost$Post>;
    updatePost(post: mattermost$Post): Promise<mattermost$Post>;
    patchPost(post: mattermost$PostPatch & { id: string }): Promise<mattermost$Post>;
    deletePost(postId: string): Promise<StatusOK>;
  
    getPostThread(postId: string): Promise<mattermost$PostList>;
    getPosts(channelId: string, page?: number, perPage?: number): Promise<mattermost$PostList>;
    getPostsSince(channelId: string, since: number): Promise<mattermost$PostList>;
    getPostsBefore(channelId: string, postId: string, page?: number, perPage?: number): Promise<mattermost$PostList>;
    getPostsAfter(channelId: string, postId: string, page?: number, perPage?: number): Promise<mattermost$PostList>;
  
    getFileInfosForPost(postId: string): Promise<mattermost$FileInfo[]>;
  
    getFlaggedPosts(userId: string, channelId?: string, teamId?: string, page?: number, perPage?: number): Promise<mattermost$PostList>;
    getPinnedPosts(channelId: string): Promise<mattermost$PostList>;
  
    pinPost(postId: string): Promise<StatusOK>;
    unpinPost(postId: string): Promise<StatusOK>;
  
    addReaction(userId: string, postId: string, emojiName: string): Promise<mattermost$EmojiReaction>;
    removeReaction(userId: string, postId: string, emojiName: string): Promise<StatusOK>;
    getReactionsForPost(postId: string): Promise<mattermost$EmojiReaction[]>;
  
    searchPosts(teamId: string, terms: string, isOrSearch: boolean): Promise<mattermost$PostList>;
  
    getOpenGraphMetadata(url: string): Promise<{}>;
  
    doPostAction(postId: string, actionId: string): Promise<StatusOK>;
    
    // Files Routes
    getFileUrl(fileId: string, timestamp?: string): string;
    getFileThumbnailUrl(fileId: string, timestamp?: string): string;
    getFilePreviewUrl(fileId: string, timestamp?: string): string;
  
    uploadFile(fileFormData: FormData, formBoundary?: string): Promise<{ file_infos: mattermost$FileInfo[], client_ids: string[] }>;
  
    getFilePublicLink(fileId: string): Promise<{ link: string }>;
  
    // Preference Routes
    savePreferences(userId: string, preferences: mattermost$Preference[]): Promise<StatusOK>;
    getMyPreferences(): Promise<mattermost$Preference[]>;
    deletePreferences(userId: string, preferences: mattermost$Preference[]): Promise<StatusOK>;
    
    // General Routes
    ping(): Promise<{ status: 'OK' | 'unhealthy' }>;
    logClientError(message: string, level?: 'ERROR' | 'DEBUG'): Promise<{}>;
    // getClientConfigOld(): Promise<mattermost$ClientConfigOld>;
    // getClientLicenseOld(): Promise<mattermost$ClientLicenseOld>;
    /* eslint-disable flowtype/no-weak-types */
    getTranslations(url: string): Promise<any>; // What is this?
    getWebSocketUrl(): string;
    // webrtcToken(): Promise<mattermost$WebrtcInfo>;
    
    // Integration Routes
    createIncomingWebhook(hook: mattermost$IncomingWebhook): Promise<mattermost$IncomingWebhook>;
    getIncomingWebhook(hookId: string): Promise<mattermost$IncomingWebhook>;
    getIncomingWebhooks(teamId?: string, page?: number, perPage?: number): Promise<mattermost$IncomingWebhook[]>;
    removeIncomingWebhook(hookId: string): Promise<StatusOK>;
    updateIncomingWebhook(hook: mattermost$IncomingWebhook): Promise<mattermost$IncomingWebhook>;
  
    createOutgoingWebhook(hook: mattermost$OutgoingWebhook): Promise<mattermost$OutgoingWebhook>;
    getOutgoingWebhook(hookId: string): Promise<mattermost$OutgoingWebhook>;
    getOutgoingWebhooks(channelId?: string, teamId?: string, page?: number, perPage?: number): Promise<mattermost$OutgoingWebhook[]>;
    removeOutgoingWebhook(hookId: string): Promise<StatusOK>;
    updateOutgoingWebhook(hook: mattermost$OutgoingWebhook): Promise<mattermost$OutgoingWebhook>;
    regenOutgoingHookToken(hookId: string): Promise<StatusOK>;
  
    getCommandsList(teamId: string): Promise<mattermost$Command[]>;
    getCustomTeamCommands(teamId: string): Promise<mattermost$Command[]>;
    executeCommand(command: string, commandArgs: mattermost$CommandArgs): Promise<mattermost$CommandPayload>;
    addCommand(command: mattermost$Command): Promise<mattermost$Command>;
    editCommand(command: mattermost$Command): Promise<>;
    regenCommandToken(commandId: string): Promise<{ token: string }>;
    deleteCommand(commandId: string): Promise<StatusOK>;
  
    createOAuthApp(app: mattermost$OAuthApp): Promise<mattermost$OAuthApp>;
    editOAuthApp(app: mattermost$OAuthApp): Promise<mattermost$OAuthApp>;
    getOAuthApps(page?: number, perPage?: number): Promise<mattermost$OAuthApp[]>;
    getOAuthApp(appId: string): Promise<mattermost$OAuthApp>;
    getOAuthAppInfo(appId: string): Promise<mattermost$OAuthApp>; // Without any private data
    deleteOAuthApp(appId: string): Promise<StatusOK>;
    regenOAuthAppSecret(appId: string): Promise<mattermost$OAuthApp>;
    
    // Emoji Routes
    createCustomEmoji(emoji: mattermost$Emoji, imageData: File): Promise<mattermost$Emoji>;
    getCustomEmojis(page?: number, perPage?: number): Promise<mattermost$Emoji[]>;
    deleteCustomEmoji(emojiId: string): Promise<StatusOK>;
    getSystemEmojiImageUrl(filename: string): string;
    getCustomEmojiImageUrl(emojiId: string): string;
    
    // Jobs Routes
    getJob(jobId: string): Promise<mattermost$Job>;
    getJobs(page?: number, perPage?: number): Promise<mattermost$Job[]>;
    getJobsByType(type: $PropertyType<mattermost$Job, 'type'>, page?: number, perPage?: number): Promise<mattermost$Job[]>;
    createJob(job: mattermost$Job): Promise<mattermost$Job>;
    cancelJob(jobId: string): Promise<StatusOK>;
    
    // // Admin Routes
    // getLogs(page = 0, perPage = PER_PAGE_DEFAULT): Promise<>;
    // getAudits(page = 0, perPage = PER_PAGE_DEFAULT): Promise<>;
    // getConfig(): Promise<>;
    // updateConfig(config): Promise<>;
    // reloadConfig(): Promise<>;
    // testEmail(config): Promise<>;
    // invalidateCaches(): Promise<>;
    // recycleDatabase(): Promise<>;
    // createComplianceReport(job): Promise<>;
    // getComplianceReport(reportId): Promise<>;
    // getComplianceReports(page = 0, perPage = PER_PAGE_DEFAULT): Promise<>;
    // uploadBrandImage(imageData): Promise<>;
    // getClusterStatus(): Promise<>;
    // testLdap(): Promise<>;
    // syncLdap(): Promise<>;
    // getSamlCertificateStatus(): Promise<>;
    // uploadPublicSamlCertificate(fileData): Promise<>;
    // uploadPrivateSamlCertificate(fileData): Promise<>;
    // uploadIdpSamlCertificate(fileData): Promise<>;
    // deletePublicSamlCertificate(): Promise<>;
    // deletePrivateSamlCertificate(): Promise<>;
    // deleteIdpSamlCertificate(): Promise<>;
    // testElasticsearch(config): Promise<>;
    // purgeElasticsearchIndexes(): Promise<>;
    // uploadLicense(fileData): Promise<>;
    // removeLicense(): Promise<>;
    // getAnalytics(name = 'standard', teamId = ''): Promise<>;
    
    // // Plugin Routes - EXPERIMENTAL - SUBJECT TO CHANGE
    // uploadPlugin(fileData): Promise<>;
    // getPlugins(): Promise<>;
    // removePlugin(pluginId): Promise<>;
    // getWebappPlugins(): Promise<>;
  }
