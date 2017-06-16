require 'rails_helper'

describe TweetsController do
  describe 'GET #new' do
    it "renders the :new templete" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe 'GET #edit' do
    it "assigns the requested contact to @tweet" do
      tweet = create(:tweet)
      get :edit, id: tweet
      expect(assigns(:tweet)).to eq tweet
    end

    it "renders the :edit templete" do
      get :edit
      expect(response).to render_template :edit
    end
  end

  describe 'Get #index' do
    it "populates an array of tweets ordered by created_st DESC" do
      tweets = create_list(:tweet, 3)
      get :index
      expect(assigns(:tweets)).to match(tweets.sort{ |a, b| b.created_at <=> a.created_st })
    end

    it "renders the :index templete" do
      get :index
      expect(response).to render_template :index
    end
end
